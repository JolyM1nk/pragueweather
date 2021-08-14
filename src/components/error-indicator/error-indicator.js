import React from 'react';
import './error-indicator.scss';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src="https://img.icons8.com/ios/100/000000/error-cloud--v2.png" />
      <span>Sorry, something went wrong.</span>
    </div>
  );
};

export default ErrorIndicator;