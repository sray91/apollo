import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from './pagestyle.module.css';
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
    <div className="h-screen">
      <Head>
        <title>OUR APPROACH Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.approachHeader}>OUR<br></br>APPROACH</h1>

    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}></h3>
      <h1 className={styles.subHeadCard}>FOCUSED ON SECURITY, SCALABILITY, & GROWTH.</h1>
      <h1 className={styles.smallLine}></h1>
            <h2 className={styles.largeCard}>Your strategy needs to be designed in order to maximize what technology 
            can do to find efficiencies, build-out scale, and most of all, support your business needs.<br></br><br></br>
            While there is no uniform approach to scaling and ensuring maximum reliability, we focus on four main pillars: 
            Hardware/Software Sourcing, Network Security, User Training, and Scalability. Each one of these is incredibly 
            important in their own right, but when properly designed, they inform one another as the basis of a foundational 
            IT strategy.</h2>
    </div>

    <br></br>
    <div className={styles.singleCards}>
      <h1 className={styles.smallLine}></h1>
      <h1 className={styles.subHeadCard}>STRATEGIC HARDWARE & SOFTWARE SOURCING</h1>
      <h1 className={styles.smallLine}></h1>
            <h2 className={styles.largeCard}>One of the forgotten challenges of most companies is hardware 
            lifecycle management. Technology evolves so rapidly and so does the software we use. For companies to 
            stay ahead of the curve, we always recommend hardware leasing so that it imposes a responsible lifecycle 
            management strategy and keeps your equipment current. Overall, you end up paying about 85% of total machine 
            ownership over a three-year lease and you get to trade up as new technology emerges without 
            accumulating a tech graveyard.<br></br><br></br>
            Moving your software licenses to perpetual monthly agreements entitles you to always stay up to date and 
            avoid large capital expenditures when upgrade time comes along. Many software companies, like Adobe and Microsoft, 
            have moved almost exclusively to this type of set up but it pays to be ahead of the curve.<br></br><br></br>
            Most importantly, the leasing and cloud license strategies help shift your IT expenses from the capital to operate, 
            making your budgets more predictable and manageable.</h2>
      <br></br>
      </div>

    <div className={styles.singleCards}>
      <h1 className={styles.smallLine}></h1>
      <h1 className={styles.subHeadCard}>NETWORK SECURITY</h1>
      <h1 className={styles.smallLine}></h1>
            <h2 className={styles.largeCard}>We often see clients rely on the equipment that they got from Spectrum or FiOS. 
            This leads to ugly WiFi names, twin broadcasts (2.4 GHz and 5ghz), and, more importantly, a single WiFi password that 
            never changes. This can compromise your security as employee turnover lets institutional knowledge and security walk 
            out of the office.<br></br><br></br> 
            We are huge believers in user-based authentication to WiFi networks. Many of today’s enterprise systems have the ability 
            to incorporate with a RADIUS server or even have them built-in. This type of setup gives each user on your network their 
            own login and password that you can provision or de-provision without affecting other users. This can even be extended 
            to device-based management so you can have full control over who accesses your network and with what type of device.
            <br></br><br></br>
            This is just one of the many instances where a properly designed and comprehensive strategy increases your security and 
            network reliability.</h2>
      <br></br>
      </div>

      <div className={styles.singleCards}>
      <h1 className={styles.smallLine}></h1>
      <h1 className={styles.subHeadCard}>USER TRAINING</h1>
      <h1 className={styles.smallLine}></h1>
            <h2 className={styles.largeCard}>No matter how much any company spends on network security, spam filters, hardware, or 
            software, the biggest vulnerability to networks still rests with humans! As a company, we are firm believers in not only 
            implementing a full-stack security solution but training users on how best to use it. We have come across numerous offices 
            filled with tech-savvy users who fall victim to phishing scams.<br></br><br></br> 
            While imposing email security strategies like 2-factor authentication is important, users can still open vulnerabilities 
            via their own personal emails. We recommend running internal phishing tests and scheduling regular security training in 
            order to keep all staff apprised of the existing and emerging threats. This ensures that you are not only protecting your 
            staff, but your staff is actively protecting your business.</h2>
      <br></br>
      </div>

      <div className={styles.singleCards}>
      <h1 className={styles.smallLine}></h1>
      <h1 className={styles.subHeadCard}>SCALABILITY</h1>
      <h1 className={styles.smallLine}></h1>
            <h2 className={styles.largeCard}>There is no question that the adoption of cloud technologies has accelerated exponentially 
            over the past few years. We have seen numerous instances of the struggle between physical and cloud-hosted when it comes to 
            file servers in particular. We are big believers in the cloud as long as your security protocols and training are up to date. 
            Whether it is G-Suite or Office365, Dropbox or OneDrive, Adobe Creative Cloud or Sketch, softphones or full VoIP setups, 
            running your organizational assets via a cloud portal allows you the flexibility to grow without major capital expenditures. 
            Cloud licenses are designed to scale with your organization as you grow or even as you need to scale back. You can also tie 
            these all together with single sign or cloud identity management solutions allowing for one-click deployment.</h2>
      <br></br>
      </div>

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

export default approach