import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Space from '../components/Space'
import Link from 'next/link'
import styles from './pagestyle.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faTwitter, 
          faLinkedin, 
          faFacebook, 
          faInstagram } from '@fortawesome/free-brands-svg-icons'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Apollo Systems</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Services />
      <Contact />
      {/*<Space />


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
      </div>*/}
    </>
  )
}

export default Home