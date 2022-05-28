import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-black">
      <Head>
        <title>Apollo Systems</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Layout />
    </div>
  )
}

export default Home
