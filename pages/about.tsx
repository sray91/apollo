import React from 'react'
import Head from 'next/head'

const about = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center items-center py-20">
        <h1 className="font-black text-8xl">About</h1>
      </div>
      <div className="flex justify-center items-center py-10 px-10">
        <p>Our owners and consultants have over 20 years of combined experience in everything from engineering, automation, internal and external IT systems, software implementation, software configuration and even hardware setup/installation.</p> 
      </div>
      <p className="flex justify-center items-center px-10">
        We have worked with and for numerous fortune 500 companies as well as small to medium businesses. We understand everyone's business and goals are different; we cater our approach individually.
      </p> 
    </div>
  )
}

export default about