import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

import About from "@/components/About";

import Contact from "@/components/Contact";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";

import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Navbar from "@/components/Navbar";

import ScrollToTopButton from "@/components/ScrollToTopButton";


import { useEffect } from "react";
import "../app/globals.css";
import VisionAndMission from "@/components/VisionandMissin";
import DirectorMessage from "@/components/DirectorMessage";
import ReFacults from "@/components/research/ReFacults";
import ReAreas from "@/components/research/ReAreas";
import Conferences from "@/components/conferences";
import ListPartnership from "@/components/ListPartnership";
import Scholarship from "@/components/Scholarship";
import SolutionsServices from "@/components/SolutionsServices";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1800,
      offset: 100,
    });
  }, []);

  return (
    <>
      <ScrollToTopButton />
      <Head>
        <title>zust RIC</title>
      </Head>
      <Navbar />
      <Hero />
      <Info />
      <About />
      <VisionAndMission />
      <SolutionsServices />
      <DirectorMessage />
      <ReFacults />
      <ReAreas />
      <Conferences/>
      <ListPartnership/>
      <Scholarship/>
      <ContactInfo />
      <Contact />
      {/* <Banner /> */}
      <Footer />
    </>
  );
}
