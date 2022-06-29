import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from './pagestyle.module.css';

const about = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>ABOUT US Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.aboutHeader}>ABOUT US</div>
      <br></br>
      <div className={styles.Body}>Our owners and consultants have over 20 years of combined experience in everything from engineering, 
          automation, internal and external IT systems, software implementation, software configuration and even hardware setup/installation.
          We have worked with and for numerous fortune 500 companies as well as small to medium businesses. We understand everyone's business 
          and goals are different; we cater our approach individually.
        </div> 
        <br></br>
      <Link href="/contact">
        <button className={styles.collapsible}>FIND OUT MORE</button>
      </Link> 
    </div>
  )
}

export default about