import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

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
            <p className={styles.largeCard}>Cybersecurity attacks are a constant threat to businesses of all sizes. These attacks can happen at anytime, 
            and are constantly changing tactics to increase their likelihood of success. It's no longer a matter of IF your business will be attacked, it’s a matter of WHEN. 
            This is why it is so critical to be prepared for attacks before they occur.</p>

            <Link href="https://www.verizon.com/business/en-gb/resources/reports/dbir/">
              <button className={styles.buttonCard}>According to the 2022 Verizon Data Breach Investigations Report:</button>
            </Link> 
    </div>

    <div className={styles.cards}>
      <h3 className={styles.leftCard}>
        <ol>
          <li>43% of all data breaches involve Small and Medium-sized Businesses.</li>
          <li>Over 80% of Small and Medium-sized Businesses are not financially prepared to recover from a cyber attack.</li>
        </ol></h3>
    </div>
    
    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}></h3>
      <h3 className={styles.smallLine}></h3>
      <h2 className={styles.subHeadCard}>SHIELD YOUR BUSINESS FROM MODERN SECURITY THREATS</h2>
      <h3 className={styles.smallLine}></h3>
            <p className={styles.largeCard}>At Apollo, we understand what this risk represents to our customers and our experience allows us to deliver cost-effective 
            solutions that assist in reducing that risk. Our focus is security-first when it comes to our Managed IT Solutions. From firewalls to filtering to phishing attacks, we are 
            experts in protecting the entire IT environment for our clients. Our security audits look at every corner of your IT system to help you take a comprehensive 
            approach to managing and mitigating risks. We also partner with world-leading cybersecurity service providers to ensure our clients are properly protected at all times.</p>
    </div>

    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}></h3>
      <h3 className={styles.smallLine}></h3>
      <h2 className={styles.subHeadCard}>BUSINESS CONTINUITY IS CRITICAL</h2>
      <h3 className={styles.smallLine}></h3>
            <p className={styles.largeCard}>We understand that your business must continue to run in case of an attempted cyber attack or potential data loss. Apollo's hardened Business Continuity 
      services include Cloud Backup and Disaster Recovery to ensure your information is secured in an off-site location. You will have working copies of your data and infrastructure ready to 
      function in the event of a disaster scenario or Ransomware attack.</p>
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

export default cyber