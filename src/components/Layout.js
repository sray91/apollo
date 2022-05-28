import React from 'react'
import Image from 'next/image'

const Layout = () => {
  return (
    <div>
      <Image 
        src="/../assets/logo_w_words.svg"
        alt="Logo"
        width={500}
        height={500}
      />
    </div>
  )
}

export default Layout