import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from './pagestyle.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faComputer, 
          faCloudArrowUp,
          faEnvelope,
          faBuilding,
          faLock,
          faMousePointer,
         } from '@fortawesome/free-solid-svg-icons'
  import { faTwitter, 
          faLinkedin, 
          faFacebook, 
          faInstagram } from '@fortawesome/free-brands-svg-icons'

const projectMgmt = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>PROJECT MANAGEMENT Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.projectHeader}>PROJECT<br></br>MANAGEMENT</h1>

    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}></h3>
      <h2 className={styles.subHeadCard}>PROFESSIONALISM AND EXPERIENCE TO MEET PROJECT NEEDS</h2>
      <h3 className={styles.smallLine}></h3>
            <p className={styles.largeCard}>Apollo offers dedicated program and project managers, trained in Agile, Scrum and Six Sigma methodologies. 
            Our team delivers top notch service for your projects regardless of size, scope, or complexity. We have the experience and tools to manage 
            both your internal and external project resources, tracking deliverables, milestones, and key performance indicators in order to ensure your 
            project goes on-line, on time, and within budget. While no two projects are alike, we leverage our considerable experience to provide solutions 
            that ensure smooth and successful projects.</p>
    </div>
    
    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}></h3>
      <h3 className={styles.smallLine}></h3>
      <h2 className={styles.subHeadCard}>WHERE APOLLO PROJECT MANAGERS CAN HELP</h2>
      <h3 className={styles.smallLine}></h3>
      <h3 className={styles.divideCard}></h3>
    </div>
    <div className={styles.multiCards}>
      <h4 className={styles.smallActCard}><FontAwesomeIcon icon={faComputer} size="1x"/><br></br>Infrastructure Upgrade & Design</h4>
      <h4 className={styles.smallActCard}><FontAwesomeIcon icon={faCloudArrowUp} size="1x"/><br></br>Cloud Migration & Support</h4>
      <h4 className={styles.smallActCard}><FontAwesomeIcon icon={faEnvelope} size="1x"/><br></br>E-mail Migration</h4>
      <h4 className={styles.smallActCard}><FontAwesomeIcon icon={faBuilding} size="1x"/><br></br>Office / Location Setup</h4>
      <h4 className={styles.smallActCard}><FontAwesomeIcon icon={faLock} size="1x"/><br></br>Security & Network Assessments</h4>
      <h4 className={styles.smallActCard}><FontAwesomeIcon icon={faMousePointer} size="1x"/><br></br>Web Development</h4>
    </div>

    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}></h3>
      <h3 className={styles.smallLine}></h3>
      <h2 className={styles.subHeadCard}>BENEFITS TO OUTSOURCING IT PROJECTS</h2>
      <h3 className={styles.smallLine}></h3>
        <h3 className={styles.subHeadCard1}>Efficient:</h3>
            <p className={styles.largeCard}>Utilizing an experienced project manager will help you stay on budget and on schedule. Without the knowledge 
            and experience required for IT project management, you could be looking at cost over runs, unexpected delays and security holes as your internal 
            resources learn on the job.</p> 
        <h3 className={styles.subHeadCard1}>Effective:</h3>
            <p className={styles.largeCard}>Keep your business running smoothly and free of added stress. We handle the planning and co-ordination 
            so your key staff can stay focused on their daily responsibilities. Having an outside perspective also provides the advantage of 
            objectivity, because office politics, relationships, and personal attachments to a project can cause delays and slow your progress.</p>
        <h3 className={styles.subHeadCard1}>Secure:</h3>
            <p className={styles.largeCard}>Whether adding functionality, improving collaboration or completely overhauling your network, success will 
            require that any new system is secured. Each step of your project will include security oversight to protect your business and clients 
            as your new technology is implemented.</p>
    </div>

    <div className={styles.singleCards}>
      <h3 className={styles.divideCard}></h3>
      <h3 className={styles.smallLine}></h3>
      <h2 className={styles.subHeadCard}>THE APOLLO PROJECT MANAGEMENT PROCESS</h2>
      <h3 className={styles.smallLine}></h3>
        <h3 className={styles.subHeadCard1}>1. Initiation</h3>
            <p className={styles.largeCard}>Work with the client to identify project scope and key deliverables. Clearly define costs and controls. Acquire approval from the client.</p> 
        <h3 className={styles.subHeadCard1}>2. Planning</h3>
            <p className={styles.largeCard}>Setup project and assemble project team, develop milestones and schedule. Perform discovery work.</p>
        <h3 className={styles.subHeadCard1}>3. Execution</h3>
            <p className={styles.largeCard}>Perform project work outlined during planning. Deploy project deliverables.</p>
        <h3 className={styles.subHeadCard1}>4. Monitoring</h3>
            <p className={styles.largeCard}>Provide routine status reports to client, as well as budget reviews.</p>
        <h3 className={styles.subHeadCard1}>5. Closure</h3>
            <p className={styles.largeCard}>Meet with client to review project deliverables and provide hand-off, as needed.</p>
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

export default projectMgmt