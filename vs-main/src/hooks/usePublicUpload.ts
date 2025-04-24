import { useMutation } from 'react-query';
import { s3Upload, uploadServer } from 'services/clients/axios';
import useSession from './useSession';

export type TYPES =
  | 'PROFILE'
  | 'VENUE'
  | 'SITEMAP'
  | 'CREATOR'
  | 'POST'
  | 'CHAT'
  | 'VENDOR'
  | 'PRODUCT'
  | 'EVENT';

type TUsePublicUploadVariables = {
  type: TYPES;
  venueID?: string;
  sitemapID?: string;
  stageID?: string;
  pageID?: string;
  vendorID?: string;
  eventID?: string;
  room?: string;
  onSuccess?: (url: any) => any;
  onError?: (error: any) => any;
};

interface IPayload {
  type: TYPES;
  vendorID?: string;
  venueID?: string;
  sitemapID?: string;
  stageID?: string;
  pageID?: string;
  room?: string;
}

interface IUploadPayload extends IPayload {
  filename: string;
  filesize: string;
}

interface IUploadToS3Params extends IPayload {
  file: any;
  accessToken: string;
}

// hook to upload to S3
export default function usePublicUpload({
  type,
  venueID,
  sitemapID,
  stageID,
  pageID,
  vendorID,
  room,
  onSuccess = () => {},
  onError = () => {},
}: TUsePublicUploadVariables) {
  const { session } = useSession();

  const upload = async (file: any) => {
    let url, error;
    const user = session?.user?.sub;
    if (!user) return;

    // TODO: Pass JWT and read user details from there
    const payload: IUploadPayload = {
      type: type,
      venueID: venueID,
      pageID: pageID,
      sitemapID: sitemapID,
      filename: file.name,
      filesize: file.size,
      stageID: stageID,
      vendorID: vendorID,
      room,
    };

    const response = await uploadServer.post(`/get-presigned-url`, payload, {
      headers: {
        Authorization: `${session?.user?.accessToken}`,
      },
    });

    await s3Upload.put(response.data.data.url, file);
    url = response?.data?.data?.url?.split('?')[0];
    url = url.replace('virtuoso-public.s3.amazonaws.com', 'cdn.virtuoso.live');
    return url;
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

// function to uploads to S3
export async function uploadToS3({
  accessToken,
  type,
  venueID,
  sitemapID,
  stageID,
  pageID,
  vendorID,
  file,
}: IUploadToS3Params) {
  try {
    let url, error;

    const payload: IUploadPayload = {
      type: type,
      venueID: venueID,
      pageID: pageID,
      sitemapID: sitemapID,
      filename: file.name,
      filesize: file.size,
      stageID: stageID,
      vendorID: vendorID,
    };

    const response = await uploadServer.post(`/get-presigned-url`, payload, {
      headers: {
        Authorization: `${accessToken}`,
      },
    });
    const some = await s3Upload.put(response?.data?.data?.url, file);
    url = response?.data?.data?.url?.split('?')[0];
    url = url.replace('virtuoso-public.s3.amazonaws.com', 'cdn.virtuoso.live');
    return url;
  } catch (e) {
    // console.log(e);
  }
}
