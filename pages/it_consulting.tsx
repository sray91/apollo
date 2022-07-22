import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import styles from '/src/pagestyle.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, 
         faLinkedin, 
         faFacebook, 
         faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBrain, faEye, faGaugeSimpleHigh, faHandHoldingDollar, faUserShield } from '@fortawesome/free-solid-svg-icons';


const consulting = () => {
  return (
    <div className={styles.bkImg}>
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
        <h3 className={styles.divideCard}></h3>
        <h3 className={styles.smallLine}></h3>
        <h2 className={styles.subHeadCard}>WHAT IT CONSULTING CAN DO FOR YOUR BUSINESS:</h2>
        <h3 className={styles.smallLine}></h3>
        <h4 className={styles.hugeCard}>
          <a className={styles.aStyle}>
          <FontAwesomeIcon icon={faEye} size="1x"/>
            <br></br>
            BUSINESS INTELLIGENCE:
          </a>
          <p className={styles.pStyle}>
            <br></br>
            Access to guidance, insights, and data visualization to make managing your business easier.
          </p>
          <br></br>
          <a className={styles.aStyle}>
            <FontAwesomeIcon icon={faUserShield} size="1x"/>
            <br></br>
            DETAILED SYSTEM & SECURITY ASSESSMENTS:
          </a>
          <p className={styles.pStyle}>
            <br></br>
            Comprehensive audits and analysis of critical systems, to identify solutions that can secure your assets and save you money.
          </p>
          <br></br> 
          <a className={styles.aStyle}>
            <FontAwesomeIcon icon={faBrain} size="1x"/>
            <br></br>
            STRATEGIC PLANNING:
          </a>
          <p className={styles.pStyle}>
            <br></br>
            Assisstance in developing a tailored IT roadmap to your meet your specific business needs, desired growth, and aligned to your budget.
          </p>
          <br></br>

          <a className={styles.aStyle}>
          <FontAwesomeIcon icon={faHandHoldingDollar} size="1x"/>
            <br></br>
            TECHNOLOGY TRANSFORMATIONS:
          </a>
          <p className={styles.pStyleBot}>
            <br></br>
            Insight into emerging tools, growing trends, and industry best practices to help your business maintain or grow its competitive advantage.
          </p>
        </h4>   
        <br></br>
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