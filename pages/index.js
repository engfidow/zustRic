import RootLayout from "@/app/RootLayout";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Growth from "@/components/Growth";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Service from "@/components/Service";
import Testimonials from "@/components/Testimonials";
import Head from "next/head";



export default function Home() {
  return (
    <>
    <ScrollToTopButton/>
    <Head>
        <title>barbaar tech</title>
    </Head>
    <Navbar/>
     <Hero/>
     <Info/>
     <About/>
     <Service />
     <Portfolio/>
     <Growth/>
     <Testimonials/>
     <Contact/>
     <Banner />
     <Footer />
     </>
    
     
     
    
  )
}
