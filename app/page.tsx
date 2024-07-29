'use client'
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative w-full h-full">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-75"
              style={{
                width: `${Math.random() * 5 + 2}px`,
                height: `${Math.random() * 5 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `dotMove ${Math.random() * 10 + 5}s linear infinite`,
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className="relative z-10">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          spedire
        </h1>
      </div> 

      <Link href="./signup">
      <button className="relative z-10 mt-8 px-6 py-3 bg-pink-500 text-white font-bold rounded-lg shadow-lg hover:bg-pink-600 transition-transform transform hover:scale-105">
        Explore
      </button>
      </Link>

      <style jsx>{`
        @keyframes dotMove {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </div>
  );
}
