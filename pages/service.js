import RootLayout from '@/app/RootLayout'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import ServiceInfo from '@/components/ServiceInfo'
import Head from 'next/head'
import React from 'react'

const service = () => {
  return (
    <>
    <ScrollToTopButton/>
    <Head>
        <title>barbaar tech</title>
    </Head>
    <Navbar/>
    <Header title= "Services"/>
    <ServiceInfo/>
    <Banner />
    <Footer />
    </>
  )
}

export default service