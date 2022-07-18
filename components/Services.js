import React from 'react'
import Link from 'next/link'
import styles from './layout.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer,
         faChartLine,
         faProjectDiagram,
         faRoute,
         faShieldAlt } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  return (
    <div className="h-screen bg-white" id="services-section">
        <h1 className={styles.servicesHeader}>OUR SERVICES</h1>    
        <br></br>                  
        <Link href="/it_mgmt">
        <button className={styles.collapsible}><FontAwesomeIcon icon={faComputer} size="1x"/>&nbsp;&nbsp;&nbsp;MANAGED IT SOLUTIONS</button>
        </Link>
        <br></br>
        <Link href="/cyber">
        <button className={styles.collapsible}><FontAwesomeIcon icon={faShieldAlt} size="1x"/>&nbsp;&nbsp;&nbsp;MANAGED CYBERSECURITY</button>
        </Link>
        <br></br>
        <Link href="/projectMgmt">
        <button className={styles.collapsible}><FontAwesomeIcon icon={faProjectDiagram} size="1x"/>&nbsp;&nbsp;&nbsp;PROJECT MANAGEMENT</button>
        </Link>
        <br></br>
        <Link href="/consulting">
        <button className={styles.collapsible}><FontAwesomeIcon icon={faRoute} size="1x"/>&nbsp;&nbsp;&nbsp;STRATEGIC CONSULTING</button>
        </Link>
        <br></br>
        <Link href="/procurement">
        <button className={styles.collapsible}><FontAwesomeIcon icon={faChartLine} size="1x"/>&nbsp;&nbsp;&nbsp;IT PROCUREMENT & INSTALLATION</button>
        </Link>
    </div>
    
  )
}

export default Services