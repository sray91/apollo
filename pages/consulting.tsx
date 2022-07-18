import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import styles from '/src/pagestyle.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, 
         faLinkedin, 
         faFacebook, 
         faInstagram } from '@fortawesome/free-brands-svg-icons'


const consulting = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>IT STRATEGIC CONSULTING Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.strategyHeader}>STRATEGIC<br></br>CONSULTING
      </div>

      <div className={styles.singleCards}>
      <h3 className={styles.divideCard}></h3>
      <h2 className={styles.subHeadCard}>GROW YOUR BUSINESS CAPABILITIES</h2>
      <h3 className={styles.smallLine}></h3>
            <p className={styles.largeCard}>At Apollo, we understand that knowledge and understanding of IT related business matters may not be the most important concern
            for your business. We also understand that small and medium-sized businesses may not have access to Subject Matter Experts capable of answering questions about
            technology concerns. That is why we partner with you to provide sound strategic guidance that is easy to understand. Our goal is to empower you and your team to 
            make informed decisions based on your goals to take your business to the next level.</p>
    </div>
    
    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}></h3>
      <h3 className={styles.smallLine}></h3>
      <h2 className={styles.subHeadCard}>WHAT IT CONSULTING CAN DO FOR YOUR BUSINESS:</h2>
      <h3 className={styles.smallLine}></h3>


        <h3 className={styles.subHeadCard1}>IT Consulting</h3>
            <p className={styles.largeCard}>With Apollo you have access to affordable guidance and strategic insights you need to manage a small to medium-sized business.</p>
        <h3 className={styles.subHeadCard1}>Baseline Systems & Security Audits</h3>
            <p className={styles.largeCard}>Our audits offer a broad-spectrum analysis of your critical systems, software, and services in place. This analysis helps to identify 
            solutions that can not only make your business more secure and efficient, but can also save you money.</p>
        <h3 className={styles.subHeadCard1}>Technology Transformation</h3>
            <p className={styles.largeCard}>Technology is constantly evolving and advancing. At Apollo, we can provide insight into emerging tools, growing trends, and industry
            best practices to help your business maintain or grow its competitive advantage.</p> 
        <h3 className={styles.subHeadCard1}>Strategic Planning</h3>
            <p className={styles.largeCard}>We work with you to create a detailed Technology Plan, tailored to your meet your specific business needs, desired growth, and aligned 
            to your budget.</p>

    </div>
    <br></br>
    
    <div className={styles.cards}>
      <h2 className={styles.smallCard}></h2>
      <h2 className={styles.smallCard}>
        <Link href="/#contact-section">
          <button className={styles.collapsible}>FIND OUT MORE</button>
        </Link> 
      </h2>
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

export default consulting