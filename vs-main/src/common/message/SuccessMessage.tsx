import React from 'react';

type SuccessMessageProps = {
  successText: string;
};

const SuccessMessage: React.FC<SuccessMessageProps> = (props) => {
  const { successText } = props;
  return <div className="mb-2 rounded-md bg-green-600 p-2">{successText}</div>;
};

export default SuccessMessage;
