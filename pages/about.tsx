import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import styles from '/src/pagestyle.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, 
         faLinkedin, 
         faFacebook, 
         faInstagram } from '@fortawesome/free-brands-svg-icons'


const about = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>ABOUT US Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.aboutHeader}>ABOUT<br></br>US</h1>

    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}></h3>
      <h1 className={styles.subHeadCard}>CHARLESTON OWNED AND LOWCOUNTRY FOCUSED</h1>
      <h1 className={styles.smallLine}></h1>
            <h2 className={styles.largeCard}>Apollo Systems is a Charleston owned and grown business. 
            Our goal is to focus on meeting the technology needs of Small and Medium businesses within 
            the Charleston area, to help make them more successful. Our team has over 20 years of 
            combined experience, and come armed with a variety of skills including:</h2>
    </div>
    <br></br>
    <div className={styles.cards}>

      <h3 className={styles.leftCard}>
          <ol>
            <li>Internal and external IT systems</li>
            <li>Project management</li>
            <li>Cybersecurity</li>
            <li>Software Implementation</li>
            <li>Software Configuration</li></ol></h3>
      <h3 className={styles.leftCard}>
          <ol>
            <li>Software Development</li>
            <li>Engineering</li>
            <li>Automation</li>
            <li>Web development</li>
            <li>Hardware Setup and Installation</li>
            </ol></h3>

    </div>
    <br></br>
    <div className={styles.singleCards}>
      <h1 className={styles.smallLine}></h1>
      <h1 className={styles.subHeadCard}>CRITICAL SKILLS BUILT ON REAL-WORLD EXPERIENCE</h1>
      <h1 className={styles.smallLine}></h1>
            <h2 className={styles.largeCard}>We have worked with and for mutliple companies of various 
            sizes, including both fortune 500 companies and small to medium businesses. In the past, 
            we have found ourselves in many of the situations our clients face everyday, and come armed 
            with the learned skills to quickly produce results.<br></br><br></br>We understand businesses and goals are 
            different depending on the company and industry, and we work to develop partnerships with our 
            clients that not only ensure their information technology and security needs are met, but 
            that they are enabled to succeed longterm.</h2>
      <br></br>
      <h1 className={styles.smallLine}></h1>
      <h1 className={styles.subHeadCard}>MEET OUR TEAM:</h1>
      <h1 className={styles.smallLine}></h1>
    </div>

    <div className={styles.imgCards}>
      <h2 className={styles.smallCard}>
        <img src="./swanagan.jpg" alt="Sway" width="200px" height="200px"></img>
        <a>Swanagan Ray</a>
      </h2>
      <h2 className={styles.smallCard}>
        <img src="./lyleBlevins.jfif" alt="Ryan" width="200px" height="200px"></img>
        <a>Ryan Wagner</a>
      </h2>
      <h2 className={styles.smallCard}>
        <img src="./cory.jpg" alt="Cory" width="200px" height="200px"></img>
        <a>Cory Hank</a>
      </h2>
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

export default about