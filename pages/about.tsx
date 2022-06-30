import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from './pagestyle.module.css';

const about = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>ABOUT US Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.aboutHeader}>ABOUT US</h1>
      <br></br>
      <h1 className={styles.subhead1}>Critical skills built upon real-world experience.</h1>
            <h2 className={styles.Body}>Apollo Systems is a Charleston owned and grown business. Our goal is to focus on meeting the technology
            needs of Small and Medium businesses within the Charleston area, to help make them more successful.</h2><br></br>
            <h2 className={styles.Body}>Our team has over 20 years of combined experience, and come armed with a variety of skills including:</h2>
            <p className={styles.Body5}>
              <ol>
                <li>Engineering</li>
                <li>Project management</li>
                <li>Automation</li>
                <li>Cybersecurity</li>
                <li>Software Development</li>
                <li>Software Implementation</li>
                <li>Software Configuration</li>
                <li>Web development</li>
                <li>Hardware Setup and Installation</li>
                <li>Internal and external IT systems</li></ol></p>

      <h3 className={styles.subhead1}>What makes Apollo different?</h3>

      <h4 className={styles.Body}>We have worked with and for mutliple companies of various sizes, including both fortune 500 companies 
          and small to medium businesses. In the past, we have found ourselves in many of the situations our clients face everyday, and 
          come armed with the learned skills to quickly produce results. We understand businesses and goals are different depending on the 
          company and industry, and we work to develop partnerships with our clients that not only ensure their information technology and 
          security needs are met, but that they are enabled to succeed longterm.</h4>
 
      <h5 className={styles.subhead1}>Meet our team:</h5>

      
      <div className="flex gap-24 columns-3 content-center text-center items-center justify-center">
          <div className="column">
            <img src="./SwayRay.jpg" alt="Ryan" width="200" height="200px"></img>
            <a>Swanagan Ray</a>
          </div>
          <div className="column">
            <img src="./ryGuyNew.jpg" alt="Ryan" width="200" height="200px"></img>
            <a>Ryan Wagner</a>
          </div>
          <div className="column">
            <img src="./hanks.jpg" alt="Ryan" width="200" height="200px"></img>
            <a>Cory Hank</a>
          </div>
      </div>

       <br></br>


      <Link href="/contact">
        <button className={styles.collapsible}>FIND OUT MORE</button>
      </Link> 
    </div>
  )
}

export default about