import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './layout.module.css';
import { faComputer, faClone, faChartLine,
         faProjectDiagram,
         faPhone,
         faRoute,
         faShieldAlt } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  return (
    <div className="h-screen bg-white" id="services-section">
        <h1 className={styles.Title}><br></br>SERVICES</h1>    

                          
        <Link href="/it_mgmt">
        <button className={styles.collapsible}><FontAwesomeIcon icon={faComputer} size="1x"/>&nbsp;&nbsp;&nbsp;MANAGED IT SERVICES</button>
        </Link>

        <Link href="/cyber">
        <button className={styles.collapsible}><FontAwesomeIcon icon={faShieldAlt} size="1x"/>&nbsp;&nbsp;&nbsp;CYBERSECURITY</button>
        </Link>

        <Link href="/project">
        <button className={styles.collapsible}><FontAwesomeIcon icon={faProjectDiagram} size="1x"/>&nbsp;&nbsp;&nbsp;PROJECT MANAGEMENT</button>
        </Link>

        <Link href="/transform">
        <button className={styles.collapsible}><FontAwesomeIcon icon={faChartLine} size="1x"/>&nbsp;&nbsp;&nbsp;IT TRANSFORMATION</button>
        </Link>

        <Link href="/strat">
        <button className={styles.collapsible}><FontAwesomeIcon icon={faRoute} size="1x"/>&nbsp;&nbsp;&nbsp;IT STRATEGIC PLANNING</button>
        </Link>

    </div>
    
  )
}

export default Services