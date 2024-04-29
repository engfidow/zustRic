'use client';


import AOS from "aos";
import "aos/dist/aos.css"; 
import RootLayout from '@/app/RootLayout';
import About from '@/components/About';


import Footer from '@/components/Footer';

import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import ScrollToTopButton from '@/components/ScrollToTopButton';


import Head from 'next/head';

import React, { useEffect } from 'react'
import VisionandMissin from "@/components/VisionandMissin";
import ObjectiveValues from "@/components/ObjectiveValues";
import DirectorMessage from "@/components/DirectorMessage";

const about = () => {
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
    <Header title= "About Us"/>
   
    <About/>
    <VisionandMissin/>
    <ObjectiveValues/>
    <DirectorMessage/>
    
   
    <Footer />
    </>
    
      
    
  )
}

export default about