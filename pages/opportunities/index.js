
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
import Scholarship from "@/components/Scholarship";
const Opportunities = () => {
  return (
    <>
    <ScrollToTopButton/>
    <Head>
        <title>Zust Ric</title>
    </Head>
    <Navbar/>
    <Header title= "Opportunities"/>
    <Scholarship/>
    <Partnership/>
    <ListPartnership/>
    <Footer />
    </>
  )
}

export default Opportunities