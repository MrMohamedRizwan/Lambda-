'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import { isAuth, logout } from '../Helpers/authenticationOfCookies'

const Navbar = () => {
  const handleLogout = () => {
    logout();
  };

  
  return (
    <div className='pl-[10%] pr-[10%]'>
      <nav className=" bg-blue-100 rounded-b-[40px] flex flex-row w-[100%] border-2 border-black justify-around h-[7vh] items-center">
        <div >
            <a href="/home">Home</a>
        </div>
        <div>
            <a href="/login">Login</a>
        </div>
        <div>
            <a href="/register">Register</a>
        </div>
        {/* {isAuth() && (
                <div >
                    <a  onClick={handleLogout}  className="nav-link text-dark">
                        Logout
                    </a>
                </div>
            )} */}
      </nav>
    </div>
  )
}

export default Navbar