import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="bg-black text-white flex justify-center align-middle h-20">
      <Link href="https://linkedin.com">
        <a className="px-6">LinkedIn</a>
      </Link>
      <Link href="https://twitter.com">
        <a className="px-6">Twitter</a>
      </Link>
    </div>
  )
}

export default Footer