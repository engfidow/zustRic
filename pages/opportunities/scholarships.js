
'use client';


import AOS from "aos";
import "aos/dist/aos.css"; 
import RootLayout from '@/app/RootLayout';



import Footer from '@/components/Footer';

import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import ScrollToTopButton from '@/components/ScrollToTopButton';


import Head from 'next/head';

import React from 'react'

import Scholarship from "@/components/Scholarship";

const Scholarships = () => {
  return (
    <>
    <ScrollToTopButton/>
    <Head>
        <title>Zust Ric</title>
    </Head>
    <Navbar/>
    <Header title= "Scholarships"/>
    <Scholarship/>
    <Footer />
    </>
  )
}

export default Scholarships
