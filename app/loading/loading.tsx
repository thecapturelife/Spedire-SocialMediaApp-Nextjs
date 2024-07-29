import React from 'react';
import './loading.css'

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66" height="100px" width="100px" className="spinner">
        <circle stroke="url(#gradient)" r="20" cy="33" cx="33" strokeWidth="1" fill="transparent" className="path"></circle>
        <defs>
          <linearGradient id="gradient">
            <stop stopOpacity="1" stopColor="#fe0000" offset="0%"></stop>
            <stop stopOpacity="0" stopColor="#af3dff" offset="100%"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Loader;
