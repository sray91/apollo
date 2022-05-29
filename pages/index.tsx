import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero'
import Services from '../components/Services'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Apollo Systems</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Services />
    </>
  )
}

export default Home
