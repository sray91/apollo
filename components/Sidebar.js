import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex bg-black text-white h-20 justify-between items-center sticky top-0 z-10">
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
              <Image 
                src="/eclipseNew.jpg"
                alt="sun"
                width={70}
                height={50}
              />
            </a>
          </Link>
      </div>
    {!isOpen ? 
      ( 
        <button className="fixed z-30 flex items-center cursor-pointer right-10 top-5">
          <svg
            onClick={() => setIsOpen(!isOpen)}
            fill="white" 
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
        <button className="text-5xl text-white fixed top-4 right-4 z-20" onClick={() => setIsOpen(!isOpen)}>
          x
        </button>
      )
    }
      <div className={`top-0 right-0 fixed bg-purple-400/90 w-full h-full p-10 flex justify-center ${isOpen ? 'translate-x-0':'translate-x-full'} ease-in-out duration-300`}>
        <div className="text-5xl text-white p-6 text-center font-bold">
          <Link href="/">
            <a onClick={() => setIsOpen(!isOpen)}><h2 className="h-[15vh]">Home</h2></a>
          </Link>
          <Link href="/#services-section">
          <a onClick={() => setIsOpen(!isOpen)}><h2 className="h-[15vh]">Services</h2></a>
          </Link>
          <Link href="/about">
          <a onClick={() => setIsOpen(!isOpen)}><h2 className="h-[15vh]">About</h2></a>
          </Link>
          <Link href="/contact">
          <a onClick={() => setIsOpen(!isOpen)}><h2 className="h-[15vh]">Contact</h2></a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar