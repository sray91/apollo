import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '/src/pagestyle.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer,
         faChartLine,
         faProjectDiagram,
         faRoute,
         faShieldAlt, 
         faUserShield,
         faGaugeSimpleHigh,
         faEye,
         faBrain,
         faHandHoldingDollar,
         faPhone,
         faMagnifyingGlass,
         faGears,
         faLockOpen,
         faGear,
         faArrowRotateForward} from '@fortawesome/free-solid-svg-icons'
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
            <h2 className={styles.largeCard}>At Apollo, all our service and support offerings are designed to maximize efficiencies, enable scaleability, 
            and most of all, support your business needs.
            <br></br><br></br>
            We deploy strategic concepts derived from five basic core fundamentals.</h2>
      <h3 className={styles.divideCard}></h3>

    </div>

    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}></h3>
      <h1 className={styles.smallLine}></h1>
      <h1 className={styles.subHeadCard}>APOLLO IS:</h1>
      <h1 className={styles.smallLine}></h1>
      <h3 className={styles.divideCard}></h3>
    </div>


     <div className={styles.priApprCards}>
        <h4 className={styles.longCard}>
          <a className={styles.aStyle}>
          <FontAwesomeIcon icon={faUserShield} size="1x"/>
            <br></br>
            SECURE
          </a>
          <p>
            <br></br>
            Develope a foundation of security to protect modern businesses from growing information security threats and concerns.
          </p>
          </h4>
        <h4 className={styles.shortCard}/>
      </div>
          <br></br> 

      <div className={styles.secApprCards}>
          <h4 className={styles.shortCard}/>
          <h4 className={styles.longCard}>
          <a className={styles.aStyle}>
            <FontAwesomeIcon icon={faGaugeSimpleHigh} size="1x"/>
            <br></br>
            EFFECTIVE
          </a>
          <p>
            <br></br>
            Provide the tools and training to run a business more efficiently, with improved productivity.
          </p>
          </h4>
      </div>
          <br></br>

      <div className={styles.priApprCards}>
          <h4 className={styles.longCard}>
          <a className={styles.aStyle}>
            <FontAwesomeIcon icon={faGear} size="1x"/>
            <br></br>
            RELIABILE
          </a>
          <p>
            <br></br>
            Design systems to be robust and dependable, removing the stress and frustration of IT system failure.
          </p>
          </h4>
          <h4 className={styles.shortCard}/>
      </div>
      <br></br>

      <div className={styles.secApprCards}>
          <h4 className={styles.shortCard}/>
          <h4 className={styles.longCard}>
          <a className={styles.aStyle}>
            <FontAwesomeIcon icon={faChartLine} size="1x"/>
            <br></br>
            SCALABLE
          </a>
          <p>
            <br></br>
            Create strategic recommendations tailored to fit long-term business plans, objectives, and desired growth.
          </p>
          </h4>
      </div>
          <br></br>

      <div className={styles.priApprCards}>
          <h4 className={styles.longCard}>
          <a className={styles.aStyle}>
          <FontAwesomeIcon icon={faArrowRotateForward} size="1x"/>
            <br></br>
            STRAIGHFORWARD
          </a>
          <p>
            <br></br>
            Enable effective IT decision-making through no-nonsense, easy-to-understand communication.
          </p>
          </h4>
          <h4 className={styles.shortCard}/>
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