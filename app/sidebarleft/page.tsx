'use client'
import React, { useEffect, useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { FaRegMessage } from "react-icons/fa6";
import { AiOutlineNotification } from "react-icons/ai";
import { GrSettingsOption } from "react-icons/gr";
import { MdOutlineHelp } from "react-icons/md";
import { BsStar } from "react-icons/bs";
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import Settings from '../settings/page';

const SidebarLeft = () => {
  const [userName, setUserName] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const storedUserName = localStorage.getItem('username');
    setUserName(storedUserName || '');
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='relative'>
      <div
        className={`fixed inset-0 bg-black z-50 md:hidden transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className='flex justify-between items-center p-4 border-b border-gray-700'>
          <h1 className='text-xl text-white'>{userName}</h1>
          <button onClick={toggleSidebar} className='text-white text-3xl'>
            <FiX />
          </button>
        </div>
        <div className='mt-10 space-y-8 px-6'>
          <div className='flex items-center space-x-4'>
            <img
              src="che2.jpeg" 
              alt="Profile"
              className='rounded-full h-20 w-20 border-2 border-blue-700'
            />
          </div>
          <div className='flex items-center space-x-4 cursor-pointer'>
            <Link href='/profile'>
              <div className='flex items-center space-x-4 cursor-pointer'>
                <CgProfile className='text-3xl text-white' />
                <h1 className='text-xl text-white hover:text-slate-500'>Profile</h1>
              </div>
            </Link>
          </div>
          <div className='flex items-center space-x-4 cursor-pointer'>
            <FaRegMessage className='text-3xl text-white' />
            <h1 className='text-xl text-white hover:text-slate-500'>Messages</h1>
          </div>
          <div className='flex items-center space-x-4 cursor-pointer'>
            <AiOutlineNotification className='text-3xl text-white' />
            <h1 className='text-xl text-white hover:text-slate-500'>Notifications</h1>
          </div>
          <div className='flex items-center space-x-4 cursor-pointer'>
            <GrSettingsOption className='text-3xl text-white' />
          </div>
          <Settings/>
          <div className='flex items-center space-x-4 cursor-pointer'>
            <MdOutlineHelp className='text-3xl text-white' />
            <h1 className='text-xl text-white hover:text-slate-500'>Help</h1>
          </div>
          <div className='flex items-center space-x-4 cursor-pointer'>
            <BsStar className='text-3xl text-yellow-500' />
            <h1 className='text-xl text-yellow-500 hover:text-yellow-400'>Premium</h1>
          </div>
        </div>
      </div>

      <div className='hidden md:flex bg-black h-full w-[20rem] p-6 border-r border-gray-50 overflow-y-hidden'>
        <div className='mt-10 space-y-8 ml-6'>
          <div className='flex items-center space-x-4'>
            <img
              src="che2.jpeg" 
              alt="Profile"
              className='rounded-full h-20 w-20 border-2 border-blue-700'
            />
            <h1 className='text-xl text-white'>{userName}</h1>
          </div>
          <div className='flex items-center space-x-4 cursor-pointer'>
            <Link href='/profile'>
              <div className='flex items-center space-x-4 cursor-pointer'>
                <CgProfile className='text-3xl text-white' />
                <h1 className='text-xl text-white hover:text-slate-500'>Profile</h1>
              </div>
            </Link>
          </div>
          <div className='flex items-center space-x-4 cursor-pointer'>
            <FaRegMessage className='text-3xl text-white' />
            <h1 className='text-xl text-white hover:text-slate-500'>Messages</h1>
          </div>
          <div className='flex items-center space-x-4 cursor-pointer'>
            <AiOutlineNotification className='text-3xl text-white' />
            <h1 className='text-xl text-white hover:text-slate-500'>Notifications</h1>
          </div>
          <div className='flex items-center space-x-4 cursor-pointer'>
            <GrSettingsOption className='text-3xl text-white' />
          </div>
          <Settings/>
          <div className='flex items-center space-x-4 cursor-pointer'>
            <MdOutlineHelp className='text-3xl text-white' />
            <h1 className='text-xl text-white hover:text-slate-500'>Help</h1>
          </div>
          <div className='flex items-center space-x-4 cursor-pointer'>
            <BsStar className='text-3xl text-yellow-500' />
            <h1 className='text-xl text-yellow-500 hover:text-yellow-400'>Premium</h1>
          </div>
        </div>
      </div>

      <button
        className='fixed top-4 left-4 md:hidden text-white text-3xl z-50'
        onClick={toggleSidebar}
      >
        <FiMenu />
      </button>
    </div>
  );
}

export default SidebarLeft;
