import React from 'react'

import Link from 'next/link'
import Head from 'next/head';

import styles from '/src/pagestyle.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer,
         faChartLine,
         faProjectDiagram,
         faRoute,
         faShieldAlt } from '@fortawesome/free-solid-svg-icons'


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

    </div>
    
  )
}

export default Services