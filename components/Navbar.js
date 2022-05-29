import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
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
        <div className="font-bold">
            <Link href="/">
                <a className="px-6">Home</a>
            </Link>
            <Link href="/">
                <a className="px-6">Services</a>
            </Link>
            <Link href="/about">
                <a className="px-6">About</a>
            </Link>
            <Link href="/contact">
                <a className="px-6">Contact</a>
            </Link>
        </div>
    </div>
  )
}

export default Navbar