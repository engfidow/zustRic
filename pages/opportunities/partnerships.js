'use client';


import AOS from "aos";
import "aos/dist/aos.css"; 
import RootLayout from '@/app/RootLayout';



import Footer from '@/components/Footer';

import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import ScrollToTopButton from '@/components/ScrollToTopButton';


import Head from 'next/head';

import React, { useEffect } from 'react'
import Partnership from "@/components/Partnership";
import ListPartnership from "@/components/ListPartnership";


const Partnerships = () => {
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
    <Header title= "Partnerships"/>
    <Partnership/>
    <ListPartnership/>
    <Footer />
    </>
    
      
    
  )
}

export default Partnerships