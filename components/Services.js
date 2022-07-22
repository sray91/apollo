import React from 'react'

import Link from 'next/link'
import Head from 'next/head';

import styles from '/src/pagestyle.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, 
         faLinkedin, 
         faFacebook, 
         faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBrain,
         faGaugeSimpleHigh,
         faEye,
         faUserShield,
         faBuildingColumns,
         faComputer,
         faShieldAlt,
         faProjectDiagram,
         faRoute,
         faPercent,
         faPuzzlePiece} from '@fortawesome/free-solid-svg-icons'


const Services = () => {
  return (
    <div className={styles.bkImg} id="services-section">
      <Head>
        <title>SERVICES Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1 className={styles.servicesHeader}>OUR<br></br>SERVICES</h1>    
        <br></br>

        <div className={styles.cards}>
          <h2 className={styles.smallCard}></h2>
            <button className={styles.serviceCard}>
              <Link href="/it_mgmt">
                <h1>
                  <FontAwesomeIcon icon={faComputer} size="1x"/>
                  &nbsp;&nbsp;&nbsp;
                  MANAGED IT SOLUTIONS
                </h1>
              </Link>
            </button>
          <h2 className={styles.smallCard}></h2>
        </div>
        <br></br>

        <div className={styles.cards}>
          <h2 className={styles.smallCard}></h2>
            <button className={styles.serviceCard}>
              <Link href="/cyber">
                <h1>
                  <FontAwesomeIcon icon={faShieldAlt} size="1x"/>
                  &nbsp;&nbsp;&nbsp;
                  MANAGED CYBERSECURITY
                </h1>
              </Link>
            </button>
          <h2 className={styles.smallCard}></h2>
        </div>
        <br></br>

        <div className={styles.cards}>
          <h2 className={styles.smallCard}></h2>
            <button className={styles.serviceCard}>
              <Link href="/projectMgmt">
                <h1>
                  <FontAwesomeIcon icon={faProjectDiagram} size="1x"/>
                  &nbsp;&nbsp;&nbsp;
                  PROJECT MANAGEMENT
                </h1>
              </Link>
            </button>
          <h2 className={styles.smallCard}></h2>
        </div>
        <br></br>

        <div className={styles.cards}>
          <h2 className={styles.smallCard}></h2>
            <button className={styles.serviceCard}>
              <Link href="/consulting">
                <h1>
                  <FontAwesomeIcon icon={faRoute} size="1x"/>
                  &nbsp;&nbsp;&nbsp;
                  STRATEGIC CONSULTING
                </h1>
              </Link>
            </button>
          <h2 className={styles.smallCard}></h2>
        </div>
        <br></br>

        <div className={styles.singleCards}>
          <h3 className={styles.divideCard}></h3>
          <h3 className={styles.divideCard}></h3>
          <h3 className={styles.smallLine}></h3>
          <h2 className={styles.subHeadCard}>BETTER IT SUPPORT</h2>
          <h3 className={styles.smallLine}></h3>
        </div>
        <br></br>

        <div className={styles.singleCards}>
          <div className={styles.imgCards}>
            <h2 className={styles.servSmallCard1}>
              <img className={styles.servImg} src="./security.jpg" alt="Ryan"></img>
              <a className={styles.aServStyle}>
                SECURITY-FOCUSED
              </a>
              <br></br><br></br>
              <p className={styles.pServStyle}>
                We ensure your organizations data and information are kept secure and protected.
              </p>
            </h2>
            <h2 className={styles.servSmallCard2}>
              <img className={styles.servImg} src="./dependable.jpg" alt="Ryan"></img>
              <a className={styles.aServStyle}>
                RELIABILITY-BASED
              </a>
              <br></br><br></br>
              <p className={styles.pServStyle}>
                We help you adapt to changes and maintain information security.
              </p>
            </h2>
          </div> 
        </div>

        <div className={styles.singleCards}>
          <div className={styles.imgCards}>
            <h2 className={styles.servSmallCard1}>
              <img className={styles.servImg} src="./growth.jpg" alt="Support" width="200px" height="200px"></img>
              <a className={styles.aServStyle}>
                STRATEGY-GUIDED
              </a>
              <br></br><br></br>
              <p className={styles.pServStyle}>
                We provide robust technology strategies implemented to support expansion, not limit it.
              </p>
            </h2>
            <h2 className={styles.servSmallCard2}>
              <img className={styles.servImg} src="./tech.jpg" alt="Cory" width="200px" height="200px"></img>
              <a className={styles.aServStyle}>
                TECHNOLOGY-DRIVEN
              </a>
              <br></br><br></br>
              <p className={styles.pServStyle}>
                We power operational continuity with industry leading IT support and services.
              </p>
            </h2>
          </div>
          <br></br> 
        </div>                                

        <br></br>

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

export default Services