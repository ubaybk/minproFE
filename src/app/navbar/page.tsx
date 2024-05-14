"use client"

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { access } from 'fs';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import api from '@/api/apiApp';
import { DiVim } from 'react-icons/di';
import { FaRegPaste } from "react-icons/fa6";




const Navbar: React.FC = () => {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState<string | any>("");
  const [referralCode, setreferralCode] = useState<string | any>([]);
  const [accessToken, setAccessToken] = useState<string | any>("");
  const role = getCookie('role')

  const getRefferalCode = async ()=> {
    try {
      const result = await api.get("/auth/register")
      setreferralCode(result.data.data)

    } catch (error) {
      console.log(error)
      
    }
  }

  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = (referralCode: string) => {
    navigator.clipboard.writeText(referralCode)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => {
          setCopySuccess(false);
        }, 1000); // Tulisan "Copied!" akan hilang setelah 3 detik
      })
      .catch(err => console.error('Failed to copy:', err));
  };

  useEffect(() => {
    getRefferalCode()
    const accessTokenCookie = getCookie('access_token')
    if (!accessTokenCookie) {
        // router.push("/login")
    }
}, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const accessTokenCookie = getCookie('access_token')
    const emailCookie = getCookie('email')
    // const referralCodeCookie = getCookie('referralCode')

    setAccessToken(accessTokenCookie)
    setEmail(emailCookie)
    // setreferralCode(referralCodeCookie)
  }, [])

  const handleLogOut = () => {
    deleteCookie('access_token');
    deleteCookie('id_user');
    deleteCookie('email');
    deleteCookie('role');
    router.push("/login")
  }
  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 p-4 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 0 1 1 1v1.406l1.098-.949a.5.5 0 1 1 .604.796L10 7.939l-2.702-2.275a.5.5 0 1 1 .604-.796L9 5.407V4a1 1 0 0 1 1-1z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M2.293 7.293a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M13.098 8.555l-2.702 2.275a.5.5 0 1 1-.604-.796L11 9.407V11a1 1 0 0 1-1 1 1 1 0 0 1-1-1V9.406L6.902 9.999a.5.5 0 1 1-.604-.796l1.098-.949V4a1 1 0 0 1 1-1 1 1 0 0 1 1 1v2.593l1.098-.949a.5.5 0 1 1 .604.796zM18 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M2 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM15 15a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M4.293 16.707a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0z" clipRule="evenodd" />
          </svg>
          <Link href="/" className="text-white text-lg font-semibold ml-2">Eventopia</Link>
        </div>
        <div className="flex-grow text-center hidden md:block">
          <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Home</Link>
          <Link href="/event" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Event</Link>
          {accessToken && role === '2' &&
            <Link href="/createEvent" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Create Event</Link>
          }
          {accessToken &&
            <Link href="/transaction" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Transaction History</Link>
          }
          {/* <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a> */}
        </div>
        <div className="flex items-center text-cyan-50 text-lg text-sm italic">
          {accessToken ?
            email :
            <Link href="/register" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded md:mr-4">Sign In</Link>
          }

          {/* {accessToken ?
            referralCode :
            <h1 className=" text-white font-bold py-2 px-4 rounded md:mr-4"></h1> 
        } */}



          {accessToken &&
            <button className='ml-3 text-white-700 hover:text-white border border-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center  dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'
              onClick={() => handleLogOut()}>logout</button>
          }

{referralCode.map((item: any, index: number) => (
        <div key={index} className='flex items-center'>
          <button className=' ml-3 hover:text-white border border-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center  dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800' onClick={() => handleCopy(item.referralCode)}> 
            <div className="flex items-center">
              <FaRegPaste className="text-white" />
              <span className="ml-1">Referral Code</span>
            </div>
          </button>
        </div>
      ))}
      {copySuccess && <span className="text-green-500 ml-2">Copied!</span>}


          <div className="flex md:hidden">
            <button type="button" onClick={toggleMenu} className="text-gray-300 hover:bg-gray-700 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {/* Heroicon name: menu */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          {/* Your mobile menu items here */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
