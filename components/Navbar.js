import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex bg-black text-white h-20 justify-between items-center">
        <div>
            <Link href="/">
                <a>
                    <Image
                        src="/apolloLogo.svg"
                        alt="Apollo Systems logo"
                        width={50}
                        height={50}
                    />
                </a>
            </Link>
        </div>
        <div>
            <Link href="/">
                <a className="px-6">Home</a>
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