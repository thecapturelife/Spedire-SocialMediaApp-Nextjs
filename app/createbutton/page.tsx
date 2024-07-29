'use client'
import React from 'react';
import './styles.css';

interface StarButtonProps {
  onClick: () => void;
}

const StarButton : React.FC<StarButtonProps>  = ({ onClick }) => {
  return (
    <button className="star-button" onClick={onClick}>
      Create Post
      <div className="star-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          version="1.1"
          viewBox="0 0 784.11 815.53"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            className="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          ></path>
        </svg>
      </div>
      <div className="star-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          version="1.1"
          viewBox="0 0 784.11 815.53"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            className="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          ></path>
        </svg>
      </div>
      <div className="star-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          version="1.1"
          viewBox="0 0 784.11 815.53"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            className="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          ></path>
        </svg>
      </div>
      <div className="star-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          version="1.1"
          viewBox="0 0 784.11 815.53"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            className="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          ></path>
        </svg>
      </div>
      <div className="star-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          version="1.1"
          viewBox="0 0 784.11 815.53"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            className="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          ></path>
        </svg>
      </div>
      <div className="star-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          version="1.1"
          viewBox="0 0 784.11 815.53"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            className="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          ></path>
        </svg>
      </div>
    </button>
  );
};

export default StarButton;
