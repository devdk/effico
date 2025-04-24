import React, { ChangeEvent, useEffect, useState } from 'react';
import Cropper from 'react-easy-crop';
import { HiUpload } from 'react-icons/hi';
import Loading from 'src/common/Loading';
import { useEditCropper } from 'src/hooks/useEditCropper';
import { TYPES } from 'src/hooks/usePublicUpload';

export interface IEditCropperProps {
  imgUrl: string;
  setImgUrl: React.Dispatch<React.SetStateAction<string>>;
  aspect?: any;
  onSave?: any;
  type?: TYPES;
  vendorID?: string;
  venueID?: string;
  sitemapID?: string;
  stageID?: string;
  pageID?: string;
}

export default function EditCropper({
  imgUrl,
  setImgUrl,
  aspect = 4 / 1,
  type = 'PROFILE',
  venueID,
  sitemapID,
  stageID,
  pageID,
  vendorID,
  onSave,
}: IEditCropperProps) {
  const [isMediaLoading, setIsMediaLoading] = useState(true);
  const [error, setError] = useState('');
  const { crop, setCrop, zoom, setZoom, onCropComplete, saveImage, isLoading } =
    useEditCropper({
      imgUrl,
      setImgUrl,
      onSave,
      type,
      venueID,
      stageID,
      sitemapID,
      pageID,
      vendorID,
    });

  const handleCoverChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) {
      return;
    }
    const fileString = URL.createObjectURL(files[0]);
    setImgUrl(fileString);
  };

  const onMediaLoaded = () => {
    setIsMediaLoading(false);
  };

  useEffect(() => {
    if (!imgUrl) {
      setIsMediaLoading(false);
      setError('No media available!');
    }
  }, [imgUrl]);

  return (
    <>
      <div className="relative h-96 overflow-hidden rounded-xl bg-base-300 dark:bg-dark-base-300">
        <Cropper
          image={imgUrl}
          crop={crop}
          zoom={zoom}
          aspect={aspect}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          onMediaLoaded={onMediaLoaded}
        />
      </div>
      <section className="flex items-center justify-between gap-4 pt-4">
        <div>
          <Loading alt={error} isLoading={isMediaLoading} />
        </div>
        <div className="flex items-center justify-end gap-4">
          <button className="c-btn-primary-with-icon relative">
            <HiUpload className="" />
            Upload
            <input
              id="cover_input"
              className="absolute inset-0 opacity-0"
              type="file"
              name="cover"
              onChange={handleCoverChange}
            />
          </button>
          <button
            onClick={() => {
              saveImage();
            }}
            className="c-btn-primary capitalize"
          >
            <Loading alt="Save" isLoading={isLoading} />
          </button>
        </div>
      </section>
    </>
  );
}
