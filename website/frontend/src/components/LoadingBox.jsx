import React from 'react'
import { Spinner } from 'react-bootstrap';

const LoadingBox = () => {
  return (
    <>
      <Spinner animation="border" role="status">
        <span className="vissulaly-hidden">Loading...</span>
      </Spinner>
    </>
  );
}

export default LoadingBox
