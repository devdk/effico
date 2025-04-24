import React, { ChangeEvent, ReactNode, useId, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import {
  VirtuosoSiteMaps,
  VirtuosoVenueDetailsFragment,
} from 'services/types/generated';
import Loading from 'src/common/Loading';
import ErrorMessage from 'src/common/message/ErrorMessage';
import usePacUploadMutation from 'src/hooks/usePakUpload';
import { bytesToSizeInHumanReadableForm } from 'src/utils';
import { v4 as uuid } from 'uuid';
import { IVenueUploads } from './EditVenueForm';
import { RiMacbookFill } from 'react-icons/ri';
import { FaAndroid, FaLinux, FaServer } from 'react-icons/fa';
import { TbBrandWindows } from 'react-icons/tb';
import { MdPhoneIphone } from 'react-icons/md';

type TYPES = 'VENUE' | 'SITEMAP';

type TChooseOSProps = {
  data: VirtuosoVenueDetailsFragment | VirtuosoSiteMaps | undefined;
  uploads: IVenueUploads[];
  setUploads: React.Dispatch<React.SetStateAction<IVenueUploads[]>>;
  VenueID: string | string[] | undefined;
  type?: TYPES;
  SitemapID?: string | undefined;
};

const ChooseOS = ({
  data,
  uploads,
  setUploads,
  VenueID,
  type = 'VENUE',
  SitemapID,
}: TChooseOSProps) => {
  const inputFieldElements = uploads.map((i) => {
    return (
      <OS
        key={i.id}
        data={i}
        VenueID={VenueID}
        setUploads={setUploads}
        type={type}
        SitemapID={SitemapID}
      />
    );
  });

  const handleInputFieldAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setUploads((uploads) => [
      ...uploads,
      {
        id: uuid(),
        filename: '',
        os: '',
        size: null,
        state: 'NULL',
      },
    ]);
  };

  const isUploadedForAll =
    data?.Linux_PAKURL &&
    data?.Mac_PAKURL &&
    data?.Windows_PAKURL &&
    data?.Android_PAKURL &&
    (data as VirtuosoVenueDetailsFragment)?.Linux_Dedicated_Server_PAKURL &&
    data?.iOS_PAKURL;

  const isUploadedForAny =
    data?.Linux_PAKURL ||
    data?.Mac_PAKURL ||
    data?.Windows_PAKURL ||
    data?.Android_PAKURL ||
    (data as VirtuosoVenueDetailsFragment)?.Linux_Dedicated_Server_PAKURL ||
    data?.iOS_PAKURL;

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {isUploadedForAny && (
          <h2 className="text-sm font-bold text-green-500">Uploaded</h2>
        )}
        <div className="flex flex-wrap gap-4">
          {data?.Mac_PAKURL && (
            <OSTab>
              <RiMacbookFill className="text-lg" />
              Mac
            </OSTab>
          )}
          {data?.Linux_PAKURL && (
            <OSTab>
              <FaLinux className="text-lg" />
              Linux
            </OSTab>
          )}
          {data?.Windows_PAKURL && (
            <OSTab>
              <TbBrandWindows className="text-lg" />
              Windows
            </OSTab>
          )}
          {data?.iOS_PAKURL && (
            <OSTab>
              <MdPhoneIphone className="text-lg" />
              iOS
            </OSTab>
          )}
          {data?.Android_PAKURL && (
            <OSTab>
              <FaAndroid className="text-lg" />
              Android
            </OSTab>
          )}
          {(data as VirtuosoVenueDetailsFragment)
            ?.Linux_Dedicated_Server_PAKURL && (
            <OSTab>
              <FaServer className="text-lg" />
              Linux (Dedicated Server)
            </OSTab>
          )}
        </div>
      </div>

      <div className="space-y-4" data-testid="os-uploads-container">
        {isUploadedForAll && (
          <p className="font-semibold text-red-400">Replace</p>
        )}
        {inputFieldElements}
      </div>

      <p
        onClick={handleInputFieldAdd}
        className="inline-block text-sm cursor-pointer text-primary"
        data-testid="add-another-os-btn"
      >
        + Add another Operating System
      </p>
    </div>
  );
};

function OSTab({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-2 px-4 py-2 text-base rounded-lg color-heading bg-base-100 dark:bg-dark-base-100">
      {children}
    </p>
  );
}

type TOSProps = {
  data: IVenueUploads;
  VenueID: string | string[] | undefined;
  setUploads: React.Dispatch<React.SetStateAction<IVenueUploads[]>>;
  type: TYPES;
  SitemapID?: string | undefined;
};

export function OS({
  data,
  VenueID,
  setUploads,
  type = 'VENUE',
  SitemapID,
}: TOSProps) {
  const keyId = useId();
  const [error, setError] = useState<undefined | string>(undefined);

  const OS_TYPES_ARRAY = [
    {
      label: 'Linux',
      value: 'linux',
    },
    {
      label: 'Windows',
      value: 'windows',
    },
    {
      label: 'Mac',
      value: 'mac',
    },
    {
      label: 'iOS',
      value: 'ios',
    },
    {
      label: 'Android',
      value: 'android',
    },
    {
      label: 'Linux (Dedicated Server)',
      value: 'linux_dedicated',
    },
  ];

  const onSuccess = ({ url, id }: any) => {
    handleSetField(id, 'url', url);
    handleSetField(id, 'state', 'UPLOADED');
  };

  const onError = (error: any) => {
    // console.log(error);
  };

  const onUploadProgress = (progress: any) => {
    const { loaded, total } = progress;
    const percent = Math.floor((loaded * 100) / total);
    handleSetField(data.id, 'progress', percent);
  };

  const { mutate } = usePacUploadMutation({
    venueID: VenueID as string,
    sitemapID: SitemapID,
    type,
    onSuccess,
    onError,
    onUploadProgress,
  });

  const handleFileChange = async (
    e: ChangeEvent<HTMLInputElement>,
    id: string,
    os: string
  ) => {
    e.preventDefault();
    const { files } = e.target;
    if (!files) {
      return;
    }

    const file = files[0];
    const { name, size } = file;

    if (SitemapID) {
      mutate({ os, file, id, sitemapID: SitemapID });
    } else {
      mutate({ os, file, id });
    }

    handleSetField(id, 'size', size);
    handleSetField(id, 'filename', name);
    handleSetField(id, 'state', 'UPLOADING');
  };

  const handleSetOS = (e: any, id: string) => {
    handleSetField(id, 'os', e.target.value);
  };

  const handleSetField = (id: string, field: string, value: any) => {
    setUploads((uploads) =>
      uploads.map((i) => {
        if (i.id === id) {
          return {
            ...i,
            [field]: value,
          };
        }
        return i;
      })
    );
  };

  const handleDeleteInputField = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setUploads((ups) => ups.filter((i) => i.id !== id));
  };

  const isLoading = data.state === 'UPLOADING';
  const isUploaded = data.state === 'UPLOADED';

  if (isLoading || isUploaded) {
    return (
      <div
        className="flex flex-wrap gap-8 p-4 rounded-lg color-heading bg-base-100 dark:bg-dark-base-100"
        data-testid="os-upload-row"
        key={data.filename}
      >
        <p data-testid="os-name" className="font-bold color-heading">
          {data.os}
        </p>
        <p data-testid="os-filename" className="color-heading">
          {data.filename}
        </p>
        <p data-testid="os-upload-state" className="lowercase text-primary">
          {data.state}
        </p>
        {data.state === 'UPLOADING' && (
          <p
            data-testid="os-upload-progress"
            className="lowercase text-primary"
          >
            {data.progress}%
          </p>
        )}
        <p data-testid="os-file-size" className="">
          {bytesToSizeInHumanReadableForm(data.size ?? 0)}
        </p>
        <div className="flex justify-end flex-1">
          <button
            onClick={(e) => handleDeleteInputField(e, data.id)}
            className="flex items-center justify-center text-red-500"
            data-testid="delete-os-upload"
          >
            <AiOutlineDelete className="text-xl" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-lg">
        {error && (
          <ErrorMessage
            errorText={error}
            onCloseClick={() => setError(undefined)}
          />
        )}
      </div>
      <div
        key={data.id}
        className="flex gap-6"
        data-testid="os-upload-input-row"
      >
        <select
          onChange={(e) => handleSetOS(e, data.id)}
          value={data.os}
          name=""
          id=""
          className="max-w-xs c-input"
          data-testid="os-select"
        >
          <option value="none" defaultChecked>
            Select an OS
          </option>
          {OS_TYPES_ARRAY.map(({ label, value }) => (
            <option key={`${keyId}-${label}`} value={value}>
              {label}
            </option>
          ))}
        </select>

        <div
          className="relative flex items-center justify-center c-btn-primary rounded-xl"
          data-testid="os-file-upload-btn"
        >
          {!isLoading && (
            <input
              className="absolute inset-0 opacity-0 cursor-pointer"
              type="file"
              data-testid="os-file-input"
              onChange={(e) => handleFileChange(e, data.id, data.os)}
            />
          )}
          <Loading alt="Upload" isLoading={isLoading} />
        </div>
      </div>
    </>
  );
}

export default ChooseOS;
