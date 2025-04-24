import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

type ErrorMessageProps = {
  errorText: string;
  onCloseClick?: Function;
};

const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  const { errorText, onCloseClick: handleCloseClick } = props;
  return (
    <div className="flex flex-row items-center justify-between p-2 text-sm bg-red-500 rounded-md">
      <div>{errorText}</div>
      {handleCloseClick && (
        <div className="mr-2 cursor-pointer" onClick={() => handleCloseClick()}>
          <AiFillCloseCircle className="text-lg" />
        </div>
      )}
    </div>
  );
};

export default ErrorMessage;
