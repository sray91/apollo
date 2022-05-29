import React from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head'

const about = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen justify-center items-center">
        <h1 className="font-black text-8xl">About</h1>
      </div>
    </div>
  )
}

export default about