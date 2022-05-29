import React from 'react'
import Link from 'next/link'
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faSearch,
  faAmbulance,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="bg-black text-white flex justify-center align-middle h-20">
      <Link href="https://linkedin.com">
        <a className="px-6">LinkedIn</a>
      </Link>
      <Link href="https://twitter.com">
        <a className="px-6">Twitter</a>
      </Link>
      <FontAwesomeIcon icon="fa-brands fa-twitter" />
    </div>
  )
}

export default Footer