import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import styles from '/src/pagestyle.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, 
         faPhone } from '@fortawesome/free-solid-svg-icons'
import { faTwitter,
         faLinkedin, 
         faFacebook, 
         faInstagram } from '@fortawesome/free-brands-svg-icons'


const support = () => {
  return (
    <>
  <div className="h-screen">
      <Head>
        <title>SUPPORT Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.supportHeader}>SERVICE<br></br>SUPPORT</h1>

    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}></h3>
      <h1 className={styles.subHeadCard}>SUPPORT CONTACT INFORMATION</h1>
      <h1 className={styles.smallLine}></h1>
            <h2 className={styles.largeCard}>Regardless of whether you are an existing customer and require immediate 
            technical support, or a prospective customer with an IT emergency you need help addressing, please use 
            one of the following methods to contact us:</h2>
    </div>
    <br></br>
    <div className={styles.cards}>
      <h3 className={styles.leftCard}>
        <FontAwesomeIcon icon={faPhone} size="1x"/>
        &nbsp;&nbsp;&nbsp;843-501-1791
        </h3>
      <h3 className={styles.leftCard}>
        <FontAwesomeIcon icon={faEnvelope} size="1x"/>
        &nbsp;&nbsp;&nbsp;apolloSupport @ gmail.com
        </h3>
    </div>
    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}></h3>
      <h1 className={styles.smallLine}></h1>
            <h2 className={styles.largeCard}>Your business is our priority. If we do not immediately
            respond, we will contact you as soon as possible to help you with any issues you are facing.</h2>
    </div>

    </div>
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
    </>
  )
}

export default support