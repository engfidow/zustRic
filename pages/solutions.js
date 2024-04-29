import RootLayout from '@/app/RootLayout'


import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import Head from 'next/head'
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css"; 
import SolutionsServices from '@/components/SolutionsServices'

const solutions = () => {
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
    <Header title= "solutions & Services"/>
    
    <SolutionsServices/>
    {/* <Banner /> */}
    <Footer />
    </>
  )
}

export default solutions