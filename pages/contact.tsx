import React from 'react'
import Head from 'next/head'
import styles from './pagestyle.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

const contact = () => {
  const [isSent, setIsSent] = useState(false)
  return (
    <>
    <div className="h-64">
      <Head>
        <title>CONTACT US Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.contactHeader}>CONTACT US  
      </div>
      {/* <div className="flex justify-center items-center py-10">
        <p className="px-6">843-608-8485</p>
      </div>
      <div className="flex justify-center items-center">
        <p className="px-6">apollosystemsbiz@gmail.com</p>
      </div> */}
    </div>
    <br></br><br></br>
    <div className="h-auto px-32 pb-48">
      {isSent ? 
        ( <div className="flex flex-col flex-wrap items-center">
            <div className="py-4">
              <FontAwesomeIcon icon={faCheckSquare} size="3x"/>
            </div>
            <p className="text-3xl py-4 font-bold text-purple-500">Thank you!</p>
            <p className="py-4 font-light">We will be in touch soon</p>
          </div>
        ) : 
        (
          <form className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-gray-100 dark:bg-purple-500">
            <h1 className="text-2xl font-bold dark:text-gray-50">SEND A MESSAGE</h1>
            <label htmlFor="fullname" className="text-gray-900 font-light mt-8 dark:text-gray-50">FULL NAME<span className="text-red-500 dark:text-gray-50">*</span></label>
            <input type="text" name="fullname" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />
            <label htmlFor="email" className="text-gray-900 font-light mt-4 dark:text-gray-50">E-MAIL<span className="text-red-500">*</span></label>
            <input type="email" name="email" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />
            <label htmlFor="subject" className="text-gray-900 font-light mt-4 dark:text-gray-50">SUBJECT<span className="text-red-500">*</span></label>
            <input type="text" name="subject" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />
            <label htmlFor="message" className="text-gray-900 font-light mt-4 dark:text-gray-50">MESSAGE<span className="text-red-500">*</span></label>
            <textarea name="message" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"></textarea>
            <div className="flex flex-row items-center justify-start">
              <button onClick={() => setIsSent(true)} className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
                SEND
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-cyan-500 ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z" fill="currentColor" />
                </svg>
              </button>
            </div>
          </form>
        )
      }
    </div>
    </>
  )
}

export default contact