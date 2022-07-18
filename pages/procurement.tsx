import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import styles from '/src/pagestyle.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, 
         faLinkedin, 
         faFacebook, 
         faInstagram } from '@fortawesome/free-brands-svg-icons'


const procurement = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>TECHNOLOGY PROCUREMENT Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.tfHeader}>IT PROCUREMENT<br></br>& INSTALLATION
      </div>

      <div className={styles.singleCards}>
      <h3 className={styles.divideCard}></h3>
      <h2 className={styles.subHeadCard}>PROCURE THE RIGHT PRODUCTS TO MEET YOUR IT NEEDS</h2>
      <h3 className={styles.smallLine}></h3>
            <p className={styles.largeCard}>It can be time consuming and stressful to procure the right IT products and services. When you partner with Apollo, we take the hassle out 
            of idenfiying and acquiring the appropriate hardware and software you require for your business. We work with you to outline and plan for associated costs, as well as 
            purchase and installation of any components to make sure systems are up-to-date and running smoothly. We also provide training to ensure you and your employees are set up
            for success.</p>
    </div>
    
    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}></h3>
      <h3 className={styles.smallLine}></h3>
      <h2 className={styles.subHeadCard}>EFFECTIVELY ADDRESS IT BUSINESS NEEDS:</h2>
      <h3 className={styles.smallLine}></h3>


        <h3 className={styles.subHeadCard1}>Easy & Efficient Procurement</h3>
            <p className={styles.largeCard}>We work with you to determine what technology best suits your needs and budget, then we put in the effort to find and aquire it for you.</p>
        <h3 className={styles.subHeadCard1}>Expert Installation & Integration</h3>
            <p className={styles.largeCard}>Once the new hardware or software arrives, our team will work with your schedule to quickly install it when convenient for you.</p>
        <h3 className={styles.subHeadCard1}>New Product Training & Support</h3>
            <p className={styles.largeCard}>Our team of experts is prepared to train your team to use the new hardware or software, and answer any questions as needed.</p>  
        <h3 className={styles.subHeadCard1}>Product Maintenance & Licensing Management</h3>
            <p className={styles.largeCard}>The team at Apollo will also routinely monitor your systems to ensure they are updated and functioning properly.</p>

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

export default procurement