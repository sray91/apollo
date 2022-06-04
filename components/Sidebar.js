import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
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
        <div className="px-6">
            <FontAwesomeIcon icon={faBars} size="2x"/>
        </div>
    </div>
  )
}

export default Sidebar