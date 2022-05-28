import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="text-white h-20">
        <Image
            src="/apolloLogo.svg"
            alt="Apollo Systems logo"
            width={50}
            height={50}
        />
        Apollo Systems
    </div>
  )
}

export default Navbar