import React from 'react';

type AvatarProps = {
  src: string;
  alt: string;
  active: boolean;
};

const Avatar = (props: AvatarProps) => {
  const { src, alt, active } = props;

  return (
    <div className="relative mb-4 inline-block h-10 w-10 cursor-pointer rounded-full">
      <img src={src} alt={alt} className="h-full w-full rounded-full" />
      <div
        className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 dark:border-dark-base-200 ${
          active === false ? 'bg-dark-quarternary' : 'bg-green-500'
        }`}
      ></div>
    </div>
  );
};

export default Avatar;
