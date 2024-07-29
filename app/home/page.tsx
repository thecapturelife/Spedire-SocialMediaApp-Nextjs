'use client'
import React, { useState, useEffect } from 'react';
import { GrLogout, GrLogin } from "react-icons/gr";
import Sidebarleft from '../sidebarleft/page';
import SidebarRight from '../sidebarRight/page';
import Center from '../center/page';
import Link from 'next/link';

const Home: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const user = localStorage.getItem('userid');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userid');
    setIsLoggedIn(false);
    window.location.href = '/login';
  };

  const handleLogin = () => {
    window.location.href = '/login';
  };

  return (
    <div className='bg-black h-screen flex flex-col'>
      {/* ----------  NAVBAR ---------------- */}
      <div className='bg-gray-800 h-16 flex items-center justify-between px-4'>
        <h1 className="text-4xl ml-7 font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          spedire
        </h1>
        {isLoggedIn ? (
          <GrLogout
            className='ml-auto mr-7 text-4xl text-zinc-50 hover:text-red-500 cursor-pointer'
            onClick={handleLogout}
          />
        ) : (
          <GrLogin
            className='ml-auto mr-7 text-4xl text-zinc-50 hover:text-green-500 cursor-pointer'
            onClick={handleLogin}
          />
        )}
      </div>
      
      {/* --------- Main Content --------- */}
      <div className='flex flex-1 overflow-hidden'>
        <Sidebarleft />
        <div className='flex-1 overflow-auto'>
          <Center />
        </div>
        <SidebarRight />
      </div>
    </div>
  );
}

export default Home;
