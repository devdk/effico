import useSession from 'src/hooks/useSession';
import { useMutation } from 'react-query';
import { s3Upload, uploadServer } from 'services/clients/axios';

type TYPES = 'VENUE' | 'SITEMAP' | 'PRODUCT';

type TUsePakUploadVariables = {
  venueID?: string;
  type?: TYPES;
  sitemapID?: string;
  assetID?: string;
  assetType?: string;
  onError?: (error: any) => any;
  onSuccess?: (url: any) => any;
  onUploadProgress?: (progress: any) => any;
};

interface IUploadPayload {
  user: string;
  venueID?: string;
  os: string;
  filename: string;
  filesize: number;
  sitemapID?: string;
  assetID?: string;
  assetType?: string;
}

export default function usePacUploadMutation({
  type = 'VENUE',
  venueID,
  sitemapID,
  assetID,
  assetType,
  onSuccess = () => {},
  onError = () => {},
  onUploadProgress = () => {},
}: TUsePakUploadVariables) {
  const { session } = useSession();
  const upload = async (payload: any) => {
    const { os, file, id } = payload;

    let url, error;
    const user = session?.user?.sub;
    if (!user) return;

    const requestPayload: IUploadPayload = {
      user,
      filename: file.name,
      filesize: file.size,
      os,
    };

    if (type == 'VENUE') {
      requestPayload.venueID = venueID;
    }

    if (type == 'SITEMAP') {
      requestPayload.venueID = venueID;
      requestPayload.sitemapID = sitemapID;
    }

    if (type == 'PRODUCT') {
      requestPayload.assetID = assetID;
      requestPayload.assetType = assetType;
    }

    const response = await uploadServer.post(
      `/get-presigned-pak-url`,
      requestPayload,
      {
        headers: {
          Authorization: `${session?.user?.accessToken}`,
        },
      }
    );

    await s3Upload.put(response?.data?.data?.url, file, {
      onUploadProgress: onUploadProgress,
    });
    url = response?.data?.data?.url?.split('?')[0];
    // console.log('url before split', url);
    url = url.replace('virtuoso-public.s3.amazonaws.com', 'cdn.virtuoso.live');
    // console.log('url after split', url);
    return { url, id };
  };

  return useMutation<any, any, any>(
    (payload) => {
      return upload(payload);
    },
    {
      onSuccess,
      onError,
    }
  );
}
