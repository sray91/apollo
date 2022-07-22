import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '/src/pagestyle.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator,
         faGlobe,
         faRoute,
         faCogs, 
         faHeartbeat,
         faBrain,
         faGaugeSimpleHigh,
         faEye,
         faUserShield,
         faBuildingColumns,
         faComputer,
         faShieldAlt,
         faProjectDiagram,
         faPercent,
         faPuzzlePiece,
         faHandHoldingDollar,
         faLockOpen,
         faMagnifyingGlass,
         faPhone} from '@fortawesome/free-solid-svg-icons'
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
      <h2 className={styles.subHeadCard}>THE SUPPORT YOU NEED:</h2>
      <h3 className={styles.smallLine}></h3>
      <h3 className={styles.divideCard}></h3>
    </div>

    <div className={styles.singleCards}>
          <div className={styles.dubCards}>
            <h2 className={styles.servSmallCard}>
            <a className={styles.aServStyle}>
              IT INFRASTRUCTURE SUPPORT
            </a>
            <br></br>
            <ul>
              <li>Network Support</li>
              <li>Computer Support</li>
              <li>Infrastructure Audits</li>
              <li>Office Setup/Relocation</li>
            </ul>
          </h2>
          <h2 className={styles.servSmallCard}>
            <a className={styles.aServStyle}>
              SECURITY MONITORING
            </a>
            <br></br>
            <ul>
              <li>Threat Monitoring</li>
              <li>Disaster Recovery</li>
              <li>Security Audits</li>
              <li>Employee Training</li>
            </ul>
          </h2>
          </div>
          <div className={styles.dubCards}>
          <h2 className={styles.servSmallCard}>
            <a className={styles.aServStyle}>
              OPERATION SUSTAINABILITY
            </a>
            <br></br>
            <ul>
              <li>Hardware Procurement/Setup</li>
              <li>Software Licensing</li>
              <li>Onsite IT Support</li>
              <li>On-demand IT Services</li>
            </ul>
          </h2>
          <h2 className={styles.servSmallCard}>
            <a className={styles.aServStyle}>
              BUSINESS INTELLIGENCE
            </a>
            <br></br>
            <ul>
              <li>IT Consulting</li>
              <li>IT Strategic Planning</li>
              <li>Data Visualization</li>
              <li>Project Support</li>
            </ul>
          </h2>
        </div>
      </div> 
        <br></br>

      <div className={styles.singleCards}>
        <h3 className={styles.divideCard}></h3>
        <h3 className={styles.divideCard}></h3>
        <h3 className={styles.smallLine}></h3>
        <h2 className={styles.subHeadCard}>BENEFITS OF APOLLO MANAGED IT SERVICES</h2>
        <h3 className={styles.smallLine}></h3>
        <h4 className={styles.hugeCard}>
          <a className={styles.aStyle}>
            <FontAwesomeIcon icon={faLockOpen} size="1x"/>
            <br></br>
            SECURITY THREAT IDENTIFICATION:
          </a>
          <p className={styles.pStyle}>
            <br></br>
            Uncover your security strengths, weaknesses and needs including hardware, software, monitoring and protocols.
          </p>
          <br></br>
          <a className={styles.aStyle}>
          <FontAwesomeIcon icon={faEye} size="1x"/>
            <br></br>
            IT SYSTEM ANALYSIS:
          </a>
          <p className={styles.pStyle}>
            <br></br>
            Review your network and IT infrastructure compared to industry best practices and latest advances in technology.
          </p>
          <br></br> 
          <a className={styles.aStyle}>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="1x"/>
            <br></br>
            CRITICAL RISK ASSESSMENT:
          </a>
          <p className={styles.pStyle}>
            <br></br>
            Understand the criticality of identified security and IT risks, based on severity and probability of occurrence.
          </p>
          <br></br>
          <a className={styles.aStyle}>
          <FontAwesomeIcon icon={faRoute} size="1x"/>
            <br></br>
            STRATEGIC PLANNING:
          </a>
          <p className={styles.pStyle}>
            <br></br>
            Align your technology strategy with your business objectives by creating a roadmap that enables continued growth.
          </p>
          <br></br>
          <a className={styles.aStyle}>
          <FontAwesomeIcon icon={faBrain} size="1x"/>
            <br></br>
            TRAINING:
          </a>
          <p className={styles.pStyle}>
            <br></br>
            Enable your staff to be better prepared for security threats, and to better utilize existing IT tools and systems through robust training.
          </p>
          <br></br>
          <a className={styles.aStyle}>
          <FontAwesomeIcon icon={faPhone} size="1x"/>
            <br></br>
            COMMUNICATION:
          </a>
          <p className={styles.pStyleBot}>
            <br></br>
            Stay well-enformed of IT matters through ongoing communication, as well as routine status updates and monitoring reports.
          </p>
        </h4>   
        <br></br>
      </div>
    
    <div className={styles.singleCards}>
      <h3 className={styles.smallLine}></h3>
      <h2 className={styles.subHeadCard}>THE APOLLO GUARANTEE</h2>
      <h3 className={styles.smallLine}></h3>
    </div>
    <div className={styles.singleCards}>
    <div className={styles.guarCards}>
      <h4 className={styles.smallCard}>
        <FontAwesomeIcon icon={faCogs} color="blueviolet" size="2x"/>
        <br></br>
        Improved
        <br></br>
        IT Reliability
      </h4>
      <h4 className={styles.smallCard}>
        <FontAwesomeIcon icon={faGlobe} color="blueviolet" size="2x"/>
        <br></br>
        Comprehensive
        <br></br>
        Security Strategy
      </h4>
      <h4 className={styles.smallCard}>
        <FontAwesomeIcon icon={faHeartbeat} color="blueviolet" size="2x"/>
        <br></br>
        Ongoing Audits
        <br></br>
        & Strategic Planning
      </h4>
      <h4 className={styles.smallCard}>
        <FontAwesomeIcon icon={faRoute} color="blueviolet" size="2x"/>
        <br></br>
        12-36 Month
        <br></br>
        Growth Plan
      </h4>
      <h4 className={styles.smallCard}>
        <FontAwesomeIcon icon={faCalculator} color="blueviolet" size="2x"/>
        <br></br>
        Easy to Understand
        <br></br>
        Pricing
      </h4>
    </div>
    </div>
    <br></br><br></br>

    
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

export default it_mgmt