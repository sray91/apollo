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
            <p className={styles.largeCard}>At Apollo, we understand that knowledge and understanding of IT related business matters is not always easy to find. 
            That is why we partner with you to provide sound strategic guidance that is easy to understand. 
            <br></br><br></br>
            Our goal is to empower you and your team to 
            make informed decisions based on your goals to take your business to the next level.</p>
    </div>
    
    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}></h3>
      <h3 className={styles.smallLine}></h3>
      <h2 className={styles.subHeadCard}>WHAT IT CONSULTING CAN DO FOR YOUR BUSINESS:</h2>
      <h3 className={styles.smallLine}></h3>


        <h3 className={styles.subHeadCard1}>IT Consulting</h3>
            <p className={styles.largeCard}>Access to affordable guidance and strategic insights you need to manage your business.</p>
        <h3 className={styles.subHeadCard1}>Baseline Systems & Security Audits</h3>
            <p className={styles.largeCard}>Perform detailed audits and analysis of your critical systems, to identify solutions that can not only make your business more secure and efficient, 
            but can also save you money.</p>
        <h3 className={styles.subHeadCard1}>Strategic Planning</h3>
            <p className={styles.largeCard}>Partner with you to create a detailed Technology Plan, tailored to your meet your specific business needs, desired growth, and aligned to your budget.</p>
        <h3 className={styles.subHeadCard1}>Technology Transformation</h3>
            <p className={styles.largeCard}>Provide insight into emerging tools, growing trends, and industry best practices to help your business maintain or grow its competitive advantage.</p> 
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

export default consulting