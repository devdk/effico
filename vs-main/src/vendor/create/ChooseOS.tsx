import React, { ChangeEvent, useId, useState } from 'react';
import { UserAssetDatasetFragment } from 'services/types/generated';
import Loading from 'src/common/Loading';
import usePacUploadMutation from 'src/hooks/usePakUpload';
import { bytesToSizeInHumanReadableForm } from 'src/utils';
import { v4 as uuid } from 'uuid';
import { IProductUploads } from './CreateProduct';

type TYPES = 'PRODUCT';

type TChooseOSProps = {
  data?: UserAssetDatasetFragment | undefined;
  uploads: IProductUploads[];
  setUploads: React.Dispatch<React.SetStateAction<IProductUploads[]>>;
  assetID: string;
  assetType: string;
  type: TYPES;
  setUmapConfig: React.Dispatch<React.SetStateAction<any>>;
  umapConfig: object;
};

const ChooseOS = ({
  data,
  uploads,
  setUploads,
  assetID,
  assetType,
  type,
  setUmapConfig,
  umapConfig,
}: TChooseOSProps) => {
  const inputFieldElements = uploads.map((i) => {
    return (
      <OS
        key={i.id}
        data={i}
        assetID={assetID}
        assetType={assetType}
        setUploads={setUploads}
        type={type}
        setUmapConfig={setUmapConfig}
        umapConfig={umapConfig}
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
    data?.Linux_Dedicated_Server_PAKURL &&
    data?.Android_PAKURL &&
    data?.iOS_PAKURL;

  const isUploadedForAny =
    data?.Linux_PAKURL ||
    data?.Mac_PAKURL ||
    data?.Windows_PAKURL ||
    data?.Linux_Dedicated_Server_PAKURL ||
    data?.Android_PAKURL ||
    data?.iOS_PAKURL;

  // console.log({ isUploadedForAny });

  return (
    <div className="space-y-4">
      <label htmlFor="" className="custom-label">
        Choose an Operating System
      </label>
      <div className="space-y-4">
        <div className="space-y-4">
          {isUploadedForAny && (
            <h2 className="text-sm font-bold text-green-500">Uploaded</h2>
          )}
          <div className="flex flex-wrap gap-4">
            {data?.Mac_PAKURL && (
              <p className="px-4 py-2 text-sm rounded-lg color-heading bg-base-100 dark:bg-dark-base-100">
                Mac
              </p>
            )}
            {data?.Linux_PAKURL && (
              <p className="px-4 py-2 text-sm rounded-lg color-heading bg-base-100 dark:bg-dark-base-100">
                Linux
              </p>
            )}
            {data?.Windows_PAKURL && (
              <p className="px-4 py-2 text-sm rounded-lg color-heading bg-base-100 dark:bg-dark-base-100">
                Windows
              </p>
            )}
            {data?.iOS_PAKURL && (
              <p className="px-4 py-2 text-sm rounded-lg color-heading bg-base-100 dark:bg-dark-base-100">
                iOS
              </p>
            )}
            {data?.Android_PAKURL && (
              <p className="px-4 py-2 text-sm rounded-lg color-heading bg-base-100 dark:bg-dark-base-100">
                Android
              </p>
            )}
            {data?.Linux_Dedicated_Server_PAKURL && (
              <p className="px-4 py-2 text-sm rounded-lg color-heading bg-base-100 dark:bg-dark-base-100">
                Linux (Dedicated Server)
              </p>
            )}
          </div>
        </div>
        <div className="space-y-4">
          {isUploadedForAll && (
            <p className="font-semibold text-red-400">Replace</p>
          )}
          {inputFieldElements}
        </div>
        <p
          onClick={handleInputFieldAdd}
          className="inline-block pt-2 cursor-pointer text-primary"
        >
          + Add another Operating System
        </p>
      </div>
    </div>
  );
};

type TOSProps = {
  data: IProductUploads;
  assetID: string;
  assetType: string;
  setUploads: React.Dispatch<React.SetStateAction<IProductUploads[]>>;
  type: TYPES;
  SitemapID?: string | undefined;
  setUmapConfig: React.Dispatch<React.SetStateAction<any>>;
  umapConfig: object;
};

export function OS({
  data,
  assetID,
  assetType,
  setUploads,
  type = 'PRODUCT',
  setUmapConfig,
  umapConfig,
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
    assetID: assetID,
    assetType: assetType,
    type: type,
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

    mutate({ os, file, id });

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
      <div className="flex gap-8" key={data.filename}>
        <p className="text-teal-500 ">{data.os}</p>
        <p className="">{data.filename}</p>
        <p className="text-teal-500 capitalize">{data.state}</p>
        {data.state === 'UPLOADING' && (
          <p className="text-teal-500 capitalize">{data.progress}%</p>
        )}
        <p className="">{bytesToSizeInHumanReadableForm(data.size ?? 0)}</p>
        <button
          onClick={(e) => handleDeleteInputField(e, data.id)}
          className="text-red-500 lowercase btn btn-ghost btn-sm"
        >
          delete
        </button>
      </div>
    );
  }

  return (
    <div key={data.id} className="flex gap-6">
      <select
        onChange={(e) => handleSetOS(e, data.id)}
        value={data.os}
        name=""
        id=""
        className="max-w-xs c-input"
      >
        <option value="none" defaultChecked>
          Select an OS
        </option>
        {OS_TYPES_ARRAY.map(({ label, value }) => (
          <option key={`${keyId} ${label}`} value={value}>
            {label}
          </option>
        ))}
      </select>
      {/* <div>
        <input
          type="string"
          placeholder="umap file name"
          className="block c-input"
          // @ts-ignore
          value={umapConfig?.[data?.os] ?? ''}
          onChange={(e) => {
            let value = e.currentTarget.value;
            if (data?.os?.length) {
              setUmapConfig({
                [data.os]: value,
              });
            } else {
              setError('Please select the OS first');
            }
          }}
        />
      </div> */}
      <div className="relative flex items-center justify-center capital c-btn-primary rounded-xl">
        {!isLoading && (
          <input
            className="absolute inset-0 opacity-0 cursor-pointer"
            type="file"
            name="myImage"
            onChange={(e) => handleFileChange(e, data.id, data.os)}
          />
        )}
        <Loading alt="Upload" isLoading={isLoading} />
      </div>
    </div>
  );
}

export default ChooseOS;
