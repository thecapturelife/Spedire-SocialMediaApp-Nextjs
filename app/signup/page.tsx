'use client'
import axios from 'axios';
import React, { useState } from 'react';
import instance from '../instance/instance';
import { toast } from 'react-toastify';
// import Loader from '../loading/loading';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = (e:any) => {
    e.preventDefault();
    if (validate()) {
      instance.post("/auth/register", { username, email, password })
        .then(() => {
          toast.success('Form submitted');
          window.location.href = "/login";
        })
        .catch((error) => {
          console.error('There was an error!', error);
          toast.error('Registration failed');                                               
       });
     }
};

  const validate = () => {
    let result = true;
    if (!username) {
      result = false;
      toast.warning('Please enter Username');
    }
    if (!email) {
      result = false;
      toast.warning('Please enter your email');
    }
    if (!password) {
      result = false;
      toast.warning('Please enter your Password');
    }
    return result;
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <svg
          className="absolute transform -rotate-45 opacity-20 scale-150"
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(0,800) scale(0.1,-0.1)" fill="#ffffff" stroke="none">
            <path d="M6410 7978 c-114 -38 -178 -70 -312 -156 -306 -183 -491 -337 -795 -650 -430 -435 -736 -865 -1061 -1452 -100 -195 -149 -264 -233 -315 -69 -42 -103 -50 -240 -58 -84 -5 -159 -13 -168 -17 -15 -7 -15 -50 -2 -160 21 -162 21 -183 -1 -206 -10 -11 -40 -58 -68 -105 -51 -83 -76 -162 -143 -455 -41 -178 -65 -347 -94 -680 -14 -173 -27 -367 -30 -430 l-4 -120 96 -50 c59 -31 151 -93 205 -137 55 -44 145 -104 200 -134 55 -31 112 -67 127 -79 24 -19 58 -26 130 -26 78 1 100 6 154 36 102 52 141 97 216 237 100 183 155 317 237 555 57 162 79 260 80 380 0 59 -4 109 -9 113 -4 3 -21 -2 -39 -11 -37 -16 -140 -24 -383 -29 -133 -3 -269 -9 -300 -13 -76 -10 -136 -27 -221 -64 -118 -49 -166 -64 -212 -64 -42 0 -93 23 -113 50 -16 20 -17 42 -12 288 5 265 5 269 -12 291 -20 26 -81 51 -128 55 -33 3 -62 10 -66 14 -12 12 172 26 424 33 153 5 299 14 360 21 61 7 187 14 279 17 92 3 243 10 335 15 155 9 229 9 245 0 22 -13 23 -72 3 -194 -4 -23 -1 -28 21 -35 33 -9 213 -34 423 -57 92 -10 196 -20 230 -22 86 -5 252 -20 261 -24 3 -1 -20 -32 -51 -67 -92 -103 -151 -196 -187 -295 -47 -133 -73 -249 -85 -379 -3 -38 -11 -91 -18 -117 -8 -27 -14 -92 -15 -147 -1 -55 -6 -122 -11 -150 -11 -56 -32 -203 -40 -265 -4 -30 -11 -59 -16 -65 -4 -5 -17 -84 -30 -175 -19 -131 -24 -201 -18 -267 7 -82 28 -137 49 -137 6 0 32 29 57 64 25 35 66 89 92 120 65 73 176 242 176 270 0 7 -19 16 -43 21 -23 5 -58 14 -78 19 -32 7 -36 12 -31 37 3 15 10 68 15 117 7 79 6 88 -17 126 -25 42 -33 73 -36 142 -4 92 6 172 32 246 11 27 19 57 17 66 -3 13 -34 7 -76 -14 -67 -32 -117 -47 -189 -58 -32 -4 -77 -15 -100 -23 -66 -26 -208 -36 -304 -21 -142 22 -225 31 -235 25z"/>
          </g>
        </svg>

        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className="absolute bg-white rounded-full animate-dot"
            style={{
              width: '6px',
              height: '6px',
              animationDelay: `${Math.random() * 2}s`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 bg-gray-800 bg-opacity-90 rounded-lg p-8 mt-8 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-white mb-4 text-center">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleClick}>
          <div className="relative">
            <input
              type="text"
              className="input-field"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            
            />
            <label className="block text-white text-sm font-bold">User Name</label>
            <div className="dot-animation"></div>
          </div>
          <div className="relative">
            <input
              type="email"
              className="input-field"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
            />
            <label className="block text-white text-sm font-bold">Email</label>
            <div className="dot-animation"></div>
          </div>
          <div className="relative">
            <input
              type="password"
              className="input-field"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />

            <label className="block text-white text-sm font-bold">Password</label>

            <div className="dot-animation"></div>
          </div>
          <button
            className="bg-pink-500 text-white py-3 px-6 rounded-lg font-bold shadow-lg hover:bg-pink-600 transition-transform transform hover:scale-105 w-full"
            type="submit"
          >
            Sign Up
          </button>
          {/* <Loader/> */}
          <button
            type="button"
            className="bg-gray-700 text-white py-3 px-6 rounded-lg font-bold shadow-lg hover:bg-gray-600 transition-transform transform hover:scale-105 w-full"
            onClick={() => (window.location.href = './login')}
          >
            Login
          </button>
        </form>
      </div>

      {/* Style for animations */}
      <style jsx>{`
        .input-field {
          padding: 10px;
          width: 100%;
          background-color: rgba(255, 255, 255, 0.1);
          border: none;
          outline: none;
          color: white;
          font-size: 16px;
          border-radius: 4px;
        }
        .dot-animation {
          position: absolute;
          width: 6px;
          height: 6px;
          background-color: #ffffff;
          border-radius: 50%;
          animation: moveDots 3s infinite;
          top: 50%;
          right: 16px;
          transform: translateY(-50%);
        }
        @keyframes moveDots {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-dot {
          animation: moveDot 2s infinite;
        }
        @keyframes moveDot {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(20px);
          }
        }
      `}</style>
    </div>
  );
};

export default SignUp;
