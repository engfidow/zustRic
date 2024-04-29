import RootLayout from '@/app/RootLayout'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import Publication from '@/components/publication'
import Head from 'next/head';
import React from 'react'

function publications() {
  return (
    <div>
    <ScrollToTopButton/>
    <Head>
        <title>zust universit</title>
    </Head>
    <Navbar/>
    <Header title= "Publication's"/>
    <Publication/>
    <Footer />
    </div>
  )
}

export default publications
