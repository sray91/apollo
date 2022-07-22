import React from 'react'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';

import styles from '/src/pagestyle.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt,
         faBullseye,
         faShieldHalved} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, 
         faLinkedin, 
         faFacebook, 
         faInstagram } from '@fortawesome/free-brands-svg-icons'


const cyber = () => {
  return (
    <div className={styles.bkImg}>
      <Head>
        <title>CYBERSECURITY Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.cyberHeader}>MANAGED<br></br>CYBERSECURITY
      </div>

    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}></h3>
      <h2 className={styles.subHeadCard}>EVERYONE IS A TARGET!</h2>
      <h3 className={styles.smallLine}></h3>
            <p className={styles.largeCard}>Cybersecurity threats, like malware, phishing scams, and DDoS attacks, are an increasing threat to businesses of all sizes.</p>

            <Link href="https://www.verizon.com/business/en-gb/resources/reports/dbir/">
              <button className={styles.buttonCard}>43% of all breaches happen to small/medium businesses!</button>
            </Link> 
    </div>
    
    <div className={styles.singleCards}>
    <h3 className={styles.divideCard}></h3>
            <p className={styles.largeCard}>It's no longer a matter of IF your business will be targeted, but WHEN. This is why it is so critical to be prepared 
            for attacks before they occur.</p>
    <h3 className={styles.divideCard}></h3>
    </div>
    <br></br>

    

    <div className={styles.singleCards}>
      <h3 className={styles.smallLine}></h3>
      <h2 className={styles.subHeadCard}>CYBERSECURITY YOU CAN DEPEND ON</h2>
      <h3 className={styles.smallLine}></h3>
            <p className={styles.largeCard}>At Apollo, we help businesses take control of their IT secutiry infrastructure. We believe that Cybersecurity is the core of everything we do, 
            not an optional service. Our focus is security-first when it comes to our Managed IT Solutions. Our goal is to define cybersecurity risks that exist 
            for your business, and use our expertise and industry partnerships to help you to mitigate them.
            </p>
      <h3 className={styles.divideCard}></h3>
    </div>
    <br></br>

    
    <div className={styles.singleCards}>
      <h3 className={styles.smallLine}></h3>
      <h2 className={styles.subHeadCard}>INCLUDED SERVICES:</h2>
      <h3 className={styles.smallLine}></h3>
      <h3 className={styles.divideCard}></h3>
    </div>

    <div className={styles.singleCards}>
      <div className={styles.dubCards}>
          <h2 className={styles.cyberSmallCard}>
            <ul>
              <li>Security Audits</li>
              <li>Network Security</li>
              <li>Monitoring & Detection</li>
              <li>Darkweb Scanning</li>
              <li>Intrusion Detection</li>
              <li>24/7 On-Call Support</li>
              <li>Remote & Onsite Support</li>
            </ul>
          </h2>
          <h2 className={styles.cyberSmallCard}>
            <ul>
              <li>Disaster Recovery</li>
              <li>Business Continuity Planning</li>
              <li>Data Security Management</li>
              <li>Email Security</li>
              <li>Disaster Recovery</li>
              <li>Team security training</li>
              <li>Security Reporting</li>
            </ul>
            </h2>
      </div>
      <h3 className={styles.divideCard}></h3>
    </div>
    <br></br>

    <div className={styles.singleCards}>
        <h3 className={styles.divideCard}></h3>
        <h3 className={styles.smallLine}></h3>
        <h2 className={styles.subHeadCard}>BENEFITS OF APOLLO CYBERSECURITY</h2>
        <h3 className={styles.smallLine}></h3>
        <h4 className={styles.hugeCardTeal}>
          <a className={styles.aStyle}>
          <FontAwesomeIcon icon={faShieldHalved} size="1x"/>
            <br></br>
            COMPREHENSIVE DATA SECURITY MANAGEMENT:
          </a>
          <p className={styles.pStyle}>
            <br></br>
            Increase productivity with data security management that keeps your information safe and available.
          </p>
          <br></br> <a className={styles.aStyle}>
            <FontAwesomeIcon icon={faBullseye} size="1x"/>
            <br></br>
            INDUSTRY-LEADING THREAT DETECTION AND RESPONSE:
          </a>
          <p className={styles.pStyle}>
            <br></br>
            Coverage by world-renowned cybersecurity service providers that utilize advanced detection and response services 
            to continuously defend against threats.
          </p>
          <br></br>
          <a className={styles.aStyle}>
          <FontAwesomeIcon icon={faPhoneAlt} size="1x"/>
            <br></br>
            LOCAL SECURITY SUPPORT:
          </a>
          <p className={styles.pStyleBot}>
            <br></br>
            Experienced IT staff only a phone call away, ready to help protect your IT infrastructure and answer your questions.
          </p>
        </h4>   
        <br></br>
      </div>    
      <br></br>
    
    <div className={styles.cards}>
      <h2 className={styles.smallCard}></h2>
      <button className={styles.contactCard}>
        <Link href="/contact">
          CONTACT US
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