import React, { useEffect, useState } from 'react';

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className={`position-fixed top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center ${isLoading ? 'd-flex' : 'd-none'}`}>
      <div className="spinner-border text-primary spinner-xl" style={{width: '6rem', height: '6rem',}} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
