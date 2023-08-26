import RootLayout from '@/app/RootLayout'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Portfolio from '@/components/Portfolio'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import Head from 'next/head'
import React from 'react'

const portfolio = () => {
  return (
    <>
    <ScrollToTopButton/>
    <Head>
        <title>barbaar tech</title>
    </Head>
    <Navbar/>
    <Header title= "Portfolio"/>
    <Portfolio/>
    <Banner />
    <Footer />
    </>
  )
}

export default portfolio