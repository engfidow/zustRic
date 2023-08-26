'use client';



import RootLayout from '@/app/RootLayout';
import About from '@/components/About';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Growth from '@/components/Growth';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Service from '@/components/Service';
import Vision from '@/components/Vision';
import Head from 'next/head';

import React from 'react'

const about = () => {
  return (
    <>
    <ScrollToTopButton/>
    <Head>
        <title>barbaar tech</title>
    </Head>
    <Navbar/>
    <Header title= "About Us"/>
    <About/>
    <Vision/>
    <Service/>
    <Growth/>
    <Banner />
    <Footer />
    </>
    
      
    
  )
}

export default about