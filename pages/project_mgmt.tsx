import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import styles from '/src/pagestyle.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer, 
          faCloudArrowUp,
          faEnvelope,
          faBuilding,
          faLock,
          faMousePointer,
          faPercentage,
          faGaugeSimpleHigh,
          faBullseye,
        } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, 
          faLinkedin, 
          faFacebook, 
          faInstagram } from '@fortawesome/free-brands-svg-icons'

          
const projectMgmt = () => {
  return (
    <div className={styles.bkImg}>
      <Head>
        <title>PROJECT MANAGEMENT Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.projectHeader}>PROJECT<br></br>MANAGEMENT</h1>

    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}/>
      <h2 className={styles.subHeadCard}>PROFESSIONALISM AND EXPERIENCE TO MEET PROJECT NEEDS</h2>
      <h3 className={styles.smallLine}/>
            <p className={styles.largeCard}>Apollo offers access to experienced and dedicated program and project managers, trained in Agile, Scrum and 
            Six Sigma methodologies. Our team is committed to delivering top notch service for your projects regardless of size, scope, or complexity. 
            <br></br><br></br>
            We have the tools and proven capabilities to manage both your internal and external project resources, track deliverables, milestones, and key 
            performance indicators to ensure successful implementation of your project on time and within budget. </p>
    </div>
    
    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}/>
      <h3 className={styles.smallLine}/>
      <h2 className={styles.subHeadCard}>WHERE APOLLO PROJECT MANAGERS CAN HELP</h2>
      <h3 className={styles.smallLine}/>
      <h3 className={styles.divideCard}/>
    </div>

    <div className={styles.singleCards}>
      <div className={styles.projCards}>
        <h4 className={styles.projectCard}>
          <FontAwesomeIcon icon={faComputer} size="1x"/>
          <br></br>
          Infrastructure
          <br></br>
          Design
          </h4>
        <h4 className={styles.projectCardB}>
          <FontAwesomeIcon icon={faCloudArrowUp} size="1x"/>
          <br></br>
          Cloud
          <br></br>
          Migration
          </h4>
        <h4 className={styles.projectCardC}>
          <FontAwesomeIcon icon={faEnvelope} size="1x"/>
          <br></br>
          E-mail
          <br></br>
          Migration
          </h4>
        <h4 className={styles.projectCardB}>
          <FontAwesomeIcon icon={faBuilding} size="1x"/>
          <br></br>
          Office
          <br></br>
          Setup/ Relocation
          </h4>
        <h4 className={styles.projectCard}>
          <FontAwesomeIcon icon={faLock} size="1x"/>
          <br></br>
          Security/
          <br></br>
          Network Upgrades
          </h4>
        <h4 className={styles.projectCardC}>
        <FontAwesomeIcon icon={faMousePointer} size="1x"/>
        <br></br>
        Web
        <br></br>
        Development
        </h4>
      </div>
      <h3 className={styles.divideCard}/>
    </div>

    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}></h3>
      <h1 className={styles.smallLine}></h1>
      <h1 className={styles.subHeadCard}>APOLLO PROJECT MANAGEMENT BENEFITS:</h1>
      <h1 className={styles.smallLine}></h1>
      <h3 className={styles.divideCard}></h3>
    </div>


     <div className={styles.priApprCards}>
        <h4 className={styles.shortCard}>
            <a className={styles.aStyle}>
              <FontAwesomeIcon icon={faPercentage} size="1x"/>
            EFFICIENT
            </a>
          </h4>
        <h4 className={styles.longCard}>
          <p>
            Plan projects more thoroughly, using tested tools and methodologies to implement projects quickly and correctly.
          </p>
          </h4>
      </div>
          <br></br> 

      <div className={styles.priApprCards}>
          <h4 className={styles.shortCard}>
            <a className={styles.aStyle}>
              <FontAwesomeIcon icon={faBullseye} size="1x"/>
            EFFECTIVE
            </a>
          </h4>
          <h4 className={styles.longCard}>
          <p>
            Maintain a firm grasp on the scope, budget, resources, personnel, and timeline dedicated to a project.
          </p>
          </h4>
      </div>
          <br></br>

      <div className={styles.priApprCards}>
        <h4 className={styles.shortCard}>
            <a className={styles.aStyle}>
              <FontAwesomeIcon icon={faLock} size="1x"/>
              SECURED
            </a>
          </h4>
          <h4 className={styles.longCard}>
          <p>
            Oversight to protect business assests and clients as new technology or services are implemented.
          </p>
          </h4>
      </div>
      <br></br><br></br>
    
    <div className={styles.cards}>
      <h2 className={styles.smallCard}/>
      <button className={styles.contactCard}>
        <Link href="/#contact-section">
          FIND OUT MORE
        </Link>
      </button>
      <h2 className={styles.smallCard}/>
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

export default projectMgmt