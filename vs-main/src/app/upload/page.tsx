'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { s3Upload, uploadServer } from 'services/clients/axios';

interface PresignedUrl {
  partNumber: number;
  url: string;
}

interface PartStatus {
  partNumber: number;
  status: string;
  etag?: string;
}

const ZipUploader: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploadStatus, setUploadStatus] = useState<string>('idle');
  const [error, setError] = useState<string | null>(null);
  const [uploadId, setUploadId] = useState<string | null>(null);
  const [uploadKey, setUploadKey] = useState<string | null>(null);
  const [cancelTokenSource, setCancelTokenSource] = useState(
    axios.CancelToken.source()
  );
  const [partStatuses, setPartStatuses] = useState<PartStatus[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    if (selectedFile) {
      setFile(selectedFile);
      // Reset part statuses when a new file is selected.
      setPartStatuses([]);
    }
  };

  const uploadFile = async () => {
    if (!file) {
      alert('Please select a file first.');
      return;
    }

    setUploadStatus('initiating');
    setUploadProgress(0);
    setError(null);
    setPartStatuses([]);

    try {
      // Step 1: Request Presigned URLs from the API.
      // Do NOT send chunk size from the FE.
      const initResponse = await uploadServer.post(
        `/initiate-chunked-pak-upload`,
        {
          filename: file.name,
          venueID: 'test', // Replace with actual venue ID
          filesize: file.size,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (initResponse.status !== 200) {
        throw new Error('Failed to get presigned URLs.');
      }

      console.log('Init Response:', initResponse.data);
      // Destructure the partSize returned from the server
      const { uploadId, key, presignedUrls, totalParts, partSize } =
        initResponse.data.data;
      setUploadId(uploadId);
      setUploadKey(key);
      setUploadStatus('uploading');

      // Initialize partStatuses with pending status for each part.
      const initialStatuses: PartStatus[] = presignedUrls.map(
        (part: PresignedUrl) => ({
          partNumber: part.partNumber,
          status: 'pending',
        })
      );
      setPartStatuses(initialStatuses);

      // Step 2: Read file and upload each chunk in parallel using server-determined partSize.
      const fileBuffer = await file.arrayBuffer();
      let uploadedParts: any[] = [];

      // Create a new cancel token source for axios requests.
      const source = axios.CancelToken.source();
      setCancelTokenSource(source);

      const uploadPromises = presignedUrls.map(
        async (part: PresignedUrl, index: number) => {
          // Update status to uploading for this part
          setPartStatuses((prev) =>
            prev.map((p) =>
              p.partNumber === part.partNumber
                ? { ...p, status: 'uploading' }
                : p
            )
          );

          // Use the server-determined partSize to slice the file
          const start = index * partSize;
          const end = Math.min(start + partSize, file.size);
          const chunk = fileBuffer.slice(start, end);

          // Upload the chunk using axios PUT to the presigned URL.
          const response = await s3Upload.put(part.url, chunk, {
            headers: { 'Content-Type': 'application/zip' },
            cancelToken: source.token,
          });

          if (response.status < 200 || response.status >= 300) {
            throw new Error(`Failed to upload part ${part.partNumber}`);
          }

          // Extract the ETag header (axios headers are lowercased)
          const etag = response.headers.etag;
          if (!etag) {
            console.error(`Missing ETag for part ${part.partNumber}`);
            throw new Error(
              `S3 did not return an ETag for part ${part.partNumber}`
            );
          }

          uploadedParts.push({
            PartNumber: part.partNumber,
            ETag: etag.replace(/"/g, ''), // Ensure correct format
          });

          // Update part status to completed and store the etag.
          setPartStatuses((prev) =>
            prev.map((p) =>
              p.partNumber === part.partNumber
                ? { ...p, status: 'completed', etag: etag.replace(/"/g, '') }
                : p
            )
          );

          setUploadProgress(
            Math.round((uploadedParts.length / totalParts) * 100)
          );
        }
      );

      await Promise.all(uploadPromises);

      setUploadStatus('finalizing');

      // Step 3: Complete Multipart Upload
      const completeResponse = await uploadServer.post(
        `/complete-chunked-pak-upload`,
        {
          key,
          uploadId,
          parts: uploadedParts,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (completeResponse.status !== 200) {
        throw new Error('Failed to complete multipart upload.');
      }

      setUploadStatus('completed');
    } catch (err: any) {
      console.error('Upload Error:', err);
      if (axios.isCancel(err)) {
        setError('Upload cancelled by user.');
      } else {
        setError(err.message || 'Upload failed');
      }
      setUploadStatus('error');
    }
  };

  const cancelUpload = async () => {
    // Cancel the axios requests using the cancel token.
    cancelTokenSource.cancel('Upload cancelled by user.');
    setCancelTokenSource(axios.CancelToken.source());

    if (!uploadId || !uploadKey) {
      console.error('No upload to cancel.');
      return;
    }

    try {
      const cancelResponse = await uploadServer.post(
        `/cancel-chunked-pak-upload`,
        {
          key: uploadKey,
          uploadId: uploadId,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (cancelResponse.status !== 200) {
        throw new Error('Failed to cancel multipart upload.');
      }

      setUploadStatus('cancelled');
      setUploadProgress(0);
      setUploadId(null);
      setUploadKey(null);
    } catch (err: any) {
      console.error('Cancel Error:', err);
      setError(err.message || 'Failed to cancel upload');
    }
  };

  return (
    <>
      <div className="max-w-lg p-6 mx-auto mt-40 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-xl font-bold text-gray-800">
          Upload Large ZIP File
        </h2>

        <input
          type="file"
          accept=".zip"
          className="block w-full mb-4 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          onChange={handleFileChange}
        />

        <div className="flex gap-2">
          <button
            onClick={uploadFile}
            disabled={uploadStatus === 'uploading'}
            className={`w-full px-4 py-2 text-white font-semibold rounded-lg ${
              uploadStatus === 'uploading'
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {uploadStatus === 'uploading' ? 'Uploading...' : 'Upload'}
          </button>

          {uploadStatus === 'uploading' && (
            <button
              onClick={cancelUpload}
              className="w-full px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
            >
              Cancel Upload
            </button>
          )}
        </div>

        {/* Overall Upload Status */}
        {uploadStatus !== 'idle' && (
          <div className="mt-4">
            <p className="text-sm text-gray-700">
              Status: <strong>{uploadStatus}</strong>
            </p>
            <div className="relative pt-1">
              <div className="flex h-4 overflow-hidden text-xs bg-gray-200 rounded">
                <div
                  style={{ width: `${uploadProgress}%` }}
                  className="flex flex-col justify-center text-center text-white bg-blue-500 shadow-none whitespace-nowrap"
                ></div>
              </div>
              <p className="mt-2 text-xs text-gray-600">
                {uploadProgress}% Uploaded
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="max-w-5xl pt-20 mx-auto text-white">
        {/* Grid showing each part's status */}
        {partStatuses.length > 0 && (
          <div className="mt-6">
            <h3 className="mb-2 text-lg font-semibold">Parts Status</h3>
            <div className="grid grid-cols-3 gap-4 text-sm font-medium">
              <div className="font-bold">Part Number</div>
              <div className="font-bold">Status</div>
              <div className="font-bold">ETag</div>
              {partStatuses.map((part) => (
                <React.Fragment key={part.partNumber}>
                  <div>{part.partNumber}</div>
                  <div>{part.status}</div>
                  <div>{part.etag || '-'}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {error && <p className="mt-2 text-sm text-red-500">Error: {error}</p>}
      </div>
    </>
  );
};

export default ZipUploader;
