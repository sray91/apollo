import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Hamburger from 'hamburger-react'

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="flex bg-black text-white border-b-[1px] border-purple-400 h-20 justify-between items-center sticky top-0 z-10">
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
                src="/sunNew.jpg"
                alt="sun"
                width={50}
                height={50}
              />
            </a>
          </Link>
      </div>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <div className={`top-[8vh] right-0 fixed border-t-[1px] border-white bg-purple-400/90 w-full h-full p-10 flex justify-center ${isOpen ? 'translate-x-0':'translate-x-full'} ease-in-out duration-500`}>
          <div className="text-4xl text-white p-6 text-center font-bold">
            <Link href="/">
              <a onClick={() => setOpen(!isOpen)}><h2 className="h-[15vh] hover:text-black">HOME</h2></a>
            </Link>
            <Link href="/#services-section">
            <a onClick={() => setOpen(!isOpen)}><h2 className="h-[15vh] hover:text-black">SERVICES</h2></a>
            </Link>
            <Link href="/about">
            <a onClick={() => setOpen(!isOpen)}><h2 className="h-[15vh] hover:text-black">ABOUT</h2></a>
            </Link>
          </div>
        </div>
    </div>
  )
}
export default Sidebar

