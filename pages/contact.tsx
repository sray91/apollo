import React from 'react'
import Head from 'next/head'

const contact = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Contact Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center items-center py-20">
        <h1 className="font-black text-8xl">Contact</h1>
      </div>
      <div className="flex justify-center items-center py-10">
        <p className="px-6">843-608-8485</p>
      </div>
      <div className="flex justify-center items-center">
        <p className="px-6">apollosystemsbiz@gmail.com</p>
      </div>
    </div>
  )
}

export default contact