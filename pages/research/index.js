import RootLayout from '@/app/RootLayout'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import ScrollToTopButton from '@/components/ScrollToTopButton'

import Head from 'next/head'
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css"; 
import ReFacults from '@/components/research/ReFacults'
import ReAreas from '@/components/research/ReAreas'
import ReInfo from '@/components/research/ReInfo'


const Research = () => {
  useEffect(() => {
    AOS.init({
      duration: 1800,
      offset: 100,
    });
  }, []);
  return (
    <>
    <ScrollToTopButton/>
    <Head>
        <title>Zust Ric</title>
    </Head>
    <Navbar/>
    <Header title= "Research"/>
    <ReInfo/>
    <ReFacults/>
    <ReAreas/>
    {/* <Conferences/> */}
    {/* <Banner/> */}
    <Footer />
    </>
  )
}

export default Research