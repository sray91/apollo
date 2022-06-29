import React from 'react'
import Image from 'next/image'
import styles from './layout.module.css';

const Hero = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-black">
        <Image
            src="/apolloHero.svg"
            alt="Hero image of Apollo Systems logo"
            width={500}
            height={500}
        />
    </div>
  )
}

export default Hero