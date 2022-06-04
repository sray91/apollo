import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex bg-black text-white h-20 justify-between items-center sticky top-0">
      <div className="px-6">
          <Link href="/">
            <a>
              <Image
                src="/apolloLogo.svg"
                alt="Apollo Systems logo"
                width={50}
                height={50}
                />
              <Image 
                src="/apolloLogoWords.svg"
                alt="Apollo Logo w/ Words"
                width={100}
                height={50}
              />
            </a>
          </Link>
      </div>
    {!isOpen ? 
      ( 
        <button className="fixed z-30 flex items-center cursor-pointer right-10 top-6">
          <svg
            onClick={() => setIsOpen(!isOpen)}
            fill="#BB8FCE" 
            viewBox="0 0 100 80"
            width="40"
            height="40"
          >
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </button>
      ) : 
      (
        <button className="text-2xl text-white fixed top-4 right-4 z-10" onClick={() => setIsOpen(!isOpen)}>
          x
        </button>
      )
    }
      <div className={`top-0 right-0 fixed bg-purple-300/50 w-[35vw] h-full p-10 ${isOpen ? 'translate-x-0':'translate-x-full'} ease-in-out duration-300`}>
        <Link href="/">
          <a><h2 className="text-2xl text-white px-6">Home</h2></a>
        </Link>
        <Link href="/">
          <a><h2 className="text-2xl text-white px-6">Services</h2></a>
        </Link>
        <Link href="/about">
          <a><h2 className="text-2xl text-white px-6">About</h2></a>
        </Link>
        <Link href="/contact">
          <a><h2 className="text-2xl text-white px-6">Contact</h2></a>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar