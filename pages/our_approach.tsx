import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '/src/pagestyle.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer,
         faChartLine,
         faProjectDiagram,
         faRoute,
         faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, 
         faLinkedin, 
         faFacebook, 
         faInstagram } from '@fortawesome/free-brands-svg-icons'


const approach = () => {
  return (
    <div className={styles.bkImg}>
      <Head>
        <title>OUR APPROACH Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.approachHeader}>OUR<br></br>APPROACH</h1>

    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}></h3>
      <h1 className={styles.subHeadCard}>FOCUSED ON SECURITY, SCALABILITY, & GROWTH.</h1>
      <h1 className={styles.smallLine}></h1>
            <h2 className={styles.largeCard}>Your technology strategy must be designed to maximize efficiencies, scaleability, 
            and most of all, support your business needs.
            <br></br><br></br>
            All our services are based on concepts derived from four fundamental pillars:</h2>
    </div>

    <br></br>
    <div className={styles.singleCards}>
      <h1 className={styles.smallLine}></h1>
      <h1 className={styles.subHeadCard}>STRATEGIC SOURCING</h1>
      <h1 className={styles.smallLine}></h1>
            <h2 className={styles.largeCard}>One of the forgotten challenges of most companies is hardware 
            lifecycle management. Technology evolves so rapidly and so does the software we use.
            <br></br><br></br>
            We work with you to develop hardware procurement and software license strategies tjat help make your budgets more 
            predictable and manageable.</h2>
      <br></br>
      </div>

    <div className={styles.singleCards}>
      <h1 className={styles.smallLine}></h1>
      <h1 className={styles.subHeadCard}>NETWORK SECURITY</h1>
      <h1 className={styles.smallLine}></h1>
            <h2 className={styles.largeCard}>Poor network set-up and management is a very common way that businesses unknowingly 
            compromise their own security.
            <br></br><br></br> 
            We take a wholistic approach to network design, which increases both your network security and reliability.</h2>
      <br></br>
      </div>

      <div className={styles.singleCards}>
      <h1 className={styles.smallLine}></h1>
      <h1 className={styles.subHeadCard}>USER TRAINING</h1>
      <h1 className={styles.smallLine}></h1>
            <h2 className={styles.largeCard}>No matter how much any company spends on security, the biggest vulnerability to company data is 
            still the human factor!
            <br></br><br></br> 
            We are firm believers in not only implementing a full-stack security solution but training employees on how best to use it. This 
            ensures that you are not only protecting your staff, but your staff is actively protecting your business.</h2>
      <br></br>
      </div>

      <div className={styles.singleCards}>
      <h1 className={styles.smallLine}></h1>
      <h1 className={styles.subHeadCard}>SCALABILITY</h1>
      <h1 className={styles.smallLine}></h1>
            <h2 className={styles.largeCard}>As companies grow, one challenge often faced is how to prevent increases in operating costs from
            eroding profit.
            <br></br><br></br>
            We take scalability and the growth of your business into account when designing or upgrading IT systems. Our goal is to put technology
            to work for you, so costs remain low as your business grows.
            </h2>
      </div> 
    <br></br><br></br>

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

export default approach