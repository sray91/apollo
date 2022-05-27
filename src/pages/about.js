import Head from 'next/head'
import Navbar from '../src/components/Navbar'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Apollo Systems</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1>About</h1>
    </div>
  )
}
