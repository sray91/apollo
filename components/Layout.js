import React from 'react'
import Image from 'next/image'

const Layout = () => {
  return (
    <div>
        <Image
            src="/apolloHero.svg"
            alt="Hero image of Apollo Systems logo"
            width={500}
            height={500}
        />
    </div>
  )
}

export default Layout