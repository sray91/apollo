import Navbar from "./Navbar";
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Hamburger from 'hamburger-react'
// styles
import styles from "./app.module.css";

const App = () => {
  const [isOpen, setOpen] = useState(false)
    return (
        <header>
          <div className="flex bg-black text-white border-b-[1px] border-purple-400 h-20 justify-between items-center sticky top-0 z-10">
            <a href="/">
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
              <Image 
                src="/sunNew.jpg"
                alt="sun"
                width={50}
                height={50}
              />
            </a>
            <Navbar />
          </div>
        </header>
      );
    };
    
    export default App;