'use client';
import React from 'react';
import './styles.css';

const CreateButtonPage = () => {
  const handleClick = () => {
    console.log('Button Clicked');
  };

  return (
    <div className="page-container">
      <h1>Create a New Post</h1>
      <button className="star-button" onClick={handleClick}>
        Create Post
        {[...Array(6)].map((_, index) => (
          <div key={index} className={`star-${index + 1}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              viewBox="0 0 784.11 815.53"
            >
              <path
                className="fil0"
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 
                207.96,29.37 371.12,197.68 392.05,407.74 
                20.93,-210.06 184.09,-378.37 392.05,-407.74 
                -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
              />
            </svg>
          </div>
        ))}
      </button>
    </div>
  );
};

export default CreateButtonPage;
