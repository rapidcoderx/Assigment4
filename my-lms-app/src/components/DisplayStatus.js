import React from 'react';

const DisplayStatus = ({ type, message }) => {
  return (
    <div className={`status ${type}`}>
      {message}
    </div>
  );
};

export default DisplayStatus;
