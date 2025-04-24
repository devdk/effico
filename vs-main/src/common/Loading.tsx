import { AiOutlineLoading3Quarters } from 'react-icons/ai';

type TLoadingProps = {
  isLoading: boolean;
  alt: string | React.ReactNode;
  fullScreen?: boolean;
};

export default function Loading({
  alt,
  isLoading,
  fullScreen = false,
}: TLoadingProps) {
  if (!isLoading) {
    return <>{alt}</>;
  }

  if (fullScreen) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <AiOutlineLoading3Quarters className="color-heading animate-spin text-lg" />
      </div>
    );
  }
  return (
    <AiOutlineLoading3Quarters className="color-heading animate-spin text-lg" />
  );
}
