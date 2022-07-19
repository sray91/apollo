import React from 'react'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';

import styles from '/src/pagestyle.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, 
         faLinkedin, 
         faFacebook, 
         faInstagram } from '@fortawesome/free-brands-svg-icons'


const cyber = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>CYBERSECURITY Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.cyberHeader}>MANAGED<br></br>CYBERSECURITY
      </div>
      
    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}></h3>
      <h2 className={styles.subHeadCard}>ANYONE CAN BE THE TARGET OF A CYBER ATTACK</h2>
      <h3 className={styles.smallLine}></h3>
            <p className={styles.largeCard}>Cybersecurity attacks are a constant threat to businesses of all sizes.</p>

            <Link href="https://www.verizon.com/business/en-gb/resources/reports/dbir/">
              <button className={styles.buttonCard}>43% of all breaches happen to small/medium businesses!</button>
            </Link> 
    </div>

    <div className={styles.singleCards}>
    <h3 className={styles.divideCard}></h3>
            <p className={styles.largeCard}>It's no longer a matter of IF your business will be targeted, but WHEN. This is why it is so critical to be prepared 
            for attacks before they occur.</p>
    </div>
    
    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}></h3>
      <h3 className={styles.smallLine}></h3>
      <h2 className={styles.subHeadCard}>SHIELD YOUR BUSINESS FROM MODERN SECURITY THREATS</h2>
      <h3 className={styles.smallLine}></h3>
            <p className={styles.largeCard}>At Apollo, we partner with world-leading cybersecurity service providers to ensure you are properly protected at all times. 
            Our focus is security-first when it comes to our Managed IT Solutions. Our goal is to define cybersecurity risks that exist for your business, and 
            use our expertise to help you to mitigate them.</p>
      <h3 className={styles.divideCard}></h3>
      <h3 className={styles.divideCard}></h3>
    </div>
    
    <div className={styles.cards}>
      <h2 className={styles.smallCard}></h2>
      <button className={styles.contactCard}>
        <Link href="/#contact-section">
          FIND OUT MORE
        </Link>
      </button>
      <h2 className={styles.smallCard}></h2>
    </div>
    <br></br>

    <div className={styles.footerCards}>
      <h2 className={styles.footerCard}>
      <Link href="https://linkedin.com">
        <a className="p-6">
          <FontAwesomeIcon icon={faLinkedin} size="2x"/>
        </a>
      </Link>

      <Link href="https://twitter.com">
        <a className="p-6">
          <FontAwesomeIcon icon={faTwitter} size="2x"/>
        </a>
      </Link>

      <Link href="https://facebook.com">
        <a className="p-6">
          <FontAwesomeIcon icon={faFacebook} size="2x"/>
        </a>
      </Link>

      <Link href="https://instagram.com">
        <a className="p-6">
          <FontAwesomeIcon icon={faInstagram} size="2x"/>
        </a>
      </Link></h2>
    </div>

  </div>
  )
}

export default cyber