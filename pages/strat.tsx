import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from './pagestyle.module.css';

const strat = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>IT STRATEGIC PLANNING Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.strategyHeader}>STRATEGIC<br></br>PLANNING
      </div>
      
      <div className={styles.Body}><br></br>We utilize knowledge of new and emerging technology, industry best practices, 
      and analysis of your IT systems and software to develop strategic tools that empower your team to reach your 
      goals and take your business to the next level.<br></br>
        </div>

      <br></br>
      <Link href="/contact">
        <button className={styles.collapsible}>FIND OUT MORE</button>
      </Link> 
    </div>
  )
}

export default strat