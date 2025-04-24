import useSession from 'src/hooks/useSession';
import { useCallback, useState } from 'react';
import getCroppedImg from 'src/utils/cropper';
import { TYPES, uploadToS3 } from './usePublicUpload';

interface IUseEditCropperProps {
  imgUrl: string;
  setImgUrl: React.Dispatch<React.SetStateAction<string>>;
  onSave?: any;
  type?: TYPES;
  vendorID?: string;
  venueID?: string;
  sitemapID?: string;
  stageID?: string;
  pageID?: string;
}

export function useEditCropper({
  imgUrl,
  setImgUrl,
  type = 'PROFILE',
  vendorID,
  venueID,
  sitemapID,
  stageID,
  pageID,
  onSave = () => {},
}: IUseEditCropperProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [crop, setCrop] = useState<any>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<any>(1);
  const [rotation, setRotation] = useState<any>(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  const { session } = useSession();

  const saveImage = useCallback(async () => {
    try {
      setLoading(true);
      const blob = await getCroppedImg(imgUrl, croppedAreaPixels, rotation);
      const timestamp = new Date().valueOf();

      const file = new File([blob as any], `${timestamp}.png`, {
        type: 'img/png',
      });

      const url = await uploadToS3({
        accessToken: session?.user?.accessToken || '',
        file,
        type,
        vendorID,
        venueID,
        sitemapID,
        stageID,
        pageID,
      });

      // console.log({ url });
      setImgUrl(url);
      onSave();
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [croppedAreaPixels, rotation]);

  const onCropComplete = useCallback(
    (croppedArea: any, croppedAreaPixels: any) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  return {
    onCropComplete,
    crop,
    setCrop,
    zoom,
    setZoom,
    setRotation,
    saveImage,
    isLoading: loading,
  };
}
