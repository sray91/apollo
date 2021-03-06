import React from 'react'
import Image from 'next/image'


const Hero = () => {
  return (
    
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-hero-pattern">
        <Image
            src="/apolloHero.svg"
            alt="Hero image of Apollo Systems logo"
            width={600}
            height={600}
        />
    </div>
  )
}

export default Hero