import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './layout.module.css';
import { faComputer,
         faChartLine,
         faProjectDiagram,
         faRoute,
         faShieldAlt } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  return (
    <div className="h-screen bg-white" id="services-section">
        <h1 className={styles.servicesHeader}><br></br>SERVICES</h1>    
        <br></br>                  
        <Link href="/cyber">
        <button className={styles.collapsible}><FontAwesomeIcon icon={faShieldAlt} size="1x"/>&nbsp;&nbsp;&nbsp;CYBERSECURITY</button>
        </Link>
        <br></br>
        <Link href="/it_mgmt">
        <button className={styles.collapsible}><FontAwesomeIcon icon={faComputer} size="1x"/>&nbsp;&nbsp;&nbsp;MANAGED IT SOLUTIONS</button>
        </Link>
        <br></br>
        <Link href="/project">
        <button className={styles.collapsible}><FontAwesomeIcon icon={faProjectDiagram} size="1x"/>&nbsp;&nbsp;&nbsp;PROJECT MANAGEMENT</button>
        </Link>
        <br></br>
        <Link href="/strat">
        <button className={styles.collapsible}><FontAwesomeIcon icon={faRoute} size="1x"/>&nbsp;&nbsp;&nbsp;STRATEGIC PLANNING</button>
        </Link>
        <br></br>
        <Link href="/transform">
        <button className={styles.collapsible}><FontAwesomeIcon icon={faChartLine} size="1x"/>&nbsp;&nbsp;&nbsp;TECHNOLOGY TRANSFORMATION</button>
        </Link>


    </div>
    
  )
}

export default Services