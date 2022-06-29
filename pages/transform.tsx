import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from './pagestyle.module.css';

const transform = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>TECHNOLOGY TRANSFORMATION Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.tfHeader}>TECHNOLOGY<br></br>TRANSFORMATION
      </div>

      <div className={styles.Body}><br></br>We help small businesses modernize and improve their IT systems to better fit their needs. 
            Our audits offer a broad-spectrum analysis of systems, software, and services in place.
            This analysis helps to identify improvements or solutions that not only make your business run better, but can save you money. 
        </div>

      <br></br>
      <Link href="/contact">
        <button className={styles.collapsible}>FIND OUT MORE</button>
      </Link>
    </div>
  )
}

export default transform