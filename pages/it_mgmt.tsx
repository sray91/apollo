import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '/src/pagestyle.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator,
         faGlobe,
         faRoute,
         faCogs, 
         faHeartbeat} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, 
         faLinkedin, 
         faFacebook, 
         faInstagram } from '@fortawesome/free-brands-svg-icons'


const it_mgmt = () => {
  return (
    <div className={styles.bkImg}>
      <Head>
        <title>IT MANAGEMENT Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.manageHeader}>MANAGED IT<br></br>SUPPORT
  </div>

    <div className={styles.singleCards}>
    <h3 className={styles.divideCard}></h3>
      <h2 className={styles.subHeadCard}>FOCUS ON YOUR BUSINESS, LET US WORRY ABOUT YOUR TECHNOLOGY.</h2>
      <h3 className={styles.smallLine}></h3>
            <p className={styles.largeCard}>Technology should be a strategic asset that helps your business succeed. When it's not working properly, it can 
            be a major distraction.
            <br></br><br></br>
            At Apollo Systems, we have the experience to either help your internal IT department if they are overextended, or the expertise to completely manage
            all of your IT needs for you. 
            <br></br><br></br>
            Our goal is building trust based on real partnership and commitment to your needs. Our IT experts will empower you to leverage technology in a way 
            that will help you secure your business, reduce costs, and allow you to work more effectively.</p>
    </div>
    <br></br>
    
    <div className={styles.singleCards}>
      <h3 className={styles.smallLine}></h3>
      <h2 className={styles.subHeadCard}>OUR CORE FOCUS AREAS:</h2>
      <h3 className={styles.smallLine}></h3>


        <h3 className={styles.subHeadCard1}>Enhanced Security:</h3>
            <p className={styles.largeCard}>We ensure your organizations data and information are kept secure and protected.</p> 
        <h3 className={styles.subHeadCard1}>Increased Productivity:</h3>
            <p className={styles.largeCard}>We provide your staff with the tools, services, and information they need.</p> 
        <h3 className={styles.subHeadCard1}>Better Planning:</h3>
            <p className={styles.largeCard}>You will always have the guidance and analysis you need to make informed decisions about
            your systems and technology.</p>
        <h3 className={styles.subHeadCard1}>Managed Costs:</h3>
            <p className={styles.largeCard}>Our simplistic, fixed-cost IT service model helps you to better manage your budget.</p>

    </div>
    <br></br>
    
    <div className={styles.singleCards}>
      <h3 className={styles.smallLine}></h3>
      <h2 className={styles.subHeadCard}>THE APOLLO GUARANTEE</h2>
      <h3 className={styles.smallLine}></h3>
    </div>
    <div className={styles.multiCards1}>
      <h4 className={styles.smallCard}><FontAwesomeIcon icon={faCogs} size="1x"/><br></br>Improved IT Reliability</h4>
      <h4 className={styles.smallCard}><FontAwesomeIcon icon={faGlobe} size="1x"/><br></br>Comprehensive Security Strategy</h4>
      <h4 className={styles.smallCard}><FontAwesomeIcon icon={faHeartbeat} size="1x"/><br></br>Ongoing Audits and Strategic Planning</h4>
      <h4 className={styles.smallCard}><FontAwesomeIcon icon={faRoute} size="1x"/><br></br>12-36 Month Growth Plan</h4>
      <h4 className={styles.smallCard}><FontAwesomeIcon icon={faCalculator} size="1x"/><br></br>Easy to Understand Pricing</h4>
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

export default it_mgmt