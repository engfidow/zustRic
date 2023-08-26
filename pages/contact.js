import RootLayout from '@/app/RootLayout'
import Banner from '@/components/Banner'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import Head from 'next/head'
import React from 'react'

const contact = () => {
  return (
    <>
    <ScrollToTopButton/>
    <Head>
        <title>barbaar tech</title>
    </Head>
    <Navbar/>
    <Header title= "Contact Us"/>
    <Contact/>
    <Banner />
    <Footer />
    </>
  )
}

export default contact