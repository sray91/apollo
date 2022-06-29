import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from './pagestyle.module.css';

const cyber = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>CYBERSECURITY Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.cyberHeader}>CYBERSECURITY
      </div>
      
      <div className={styles.Body}><br></br><br></br>Our focus is security-first when it comes to managing IT. From firewalls to filtering to 
                phishing attacks, we are experts in protecting the entire IT environment for our clients. 
                Our security audits look at every corner of your IT system to help you take a comprehensive 
                approach to managing and mitigating risks. We also partner with world-leading cybersecurity service 
                providers to ensure our clients are properly protected at all times.<br></br><br></br>
        </div>

      <br></br>
      <Link href="/contact">
        <button className={styles.collapsible}>FIND OUT MORE</button>
      </Link>
    </div>
  )
}

export default cyber