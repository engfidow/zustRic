import RootLayout from '@/app/RootLayout'
import Banner from '@/components/Banner'
import Contact from '@/components/Contact'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import Head from 'next/head'
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css"; 

const contact = () => {
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
        <title>barbaar tech</title>
    </Head>
    <Navbar/>
    <Header title= "Contact Us"/>
    <ContactInfo/>
    <Contact/>
    <Banner />
    <Footer />
    </>
  )
}

export default contact