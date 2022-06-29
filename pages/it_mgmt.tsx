import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from './pagestyle.module.css';

const it_mgmt = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>IT MANAGEMENT Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.heading}>MANAGED<br></br>IT SERVICES
      </div>

      <div className={styles.Body}>We have taken managing IT to a whole new level for small to mid-sized companies that want more
            than an internal IT department can provide. With remote and on-site support included in our Managed IT service offering, we ensure that
            your team always has access to the help they need. Our procurement approach is foundational to the IT systems we support.  We help you select the 
            right products, tools, and software for each and every job.
        </div>

      <br></br>
      <Link href="/contact">
        <button className={styles.collapsible}>FIND OUT MORE</button>
      </Link>
    </div>
   )
}



export default it_mgmt