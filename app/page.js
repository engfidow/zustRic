import About from "@/components/About";
import Contact from "@/components/Contact";
import Growth from "@/components/Growth";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Portfolio from "@/components/Portfolio";
import Service from "@/components/Service";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";


export default function Home() {
  return (
    <>
     <Hero/>
     <Info/>
     <About/>
     <Service />
     <Portfolio/>
     <Growth/>
     <Testimonials/>
     <Contact/>
     
    </>
  )
}
