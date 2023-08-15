import React from 'react';
import { Link , useRouteError } from 'react-router-dom';
const Error = () => {
    const err=useRouteError();
  return (
    <div className="error-container">
      <div className="error-content">
        <h1>Oops! {err.status+" "+err.statusText}.</h1>
        <p>We apologize for the inconvenience. It seems there was an error  while processing your request. Please try again later or contact our support team for assistance.</p>
        <Link to="/" className="error-button">Go Back to Home</Link>
      </div>
    </div>
  );
};

export default Error;
