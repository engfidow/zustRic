"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';

// import logo  from "../assets/logo.png";
// import menu  from "../assets/menu.svg";
// import close  from "../assets/close.svg";
const Navbar = () => {
  const [active, setActive] = useState("home");
  const [hrefggle, sethrefggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollhrefp = window.scrollY;
      if (scrollhrefp > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sm:px-16 px-6 w-full flex items-center py-5 fixed hrefp-0 z-20  ${
        scrolled ? "bg-white/10 backdrop-blur-xl dark:bg-[#dee0e751] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-[8%]'>
        <Link
          href='/'
          className='flex items-center gap-2 text-center text-black-200'
          onClick={() => {
            setActive("");
            window.scrollhref(0, 0);
          }}
        >
          <Image src="/logo.png" alt='logo' width={150} height={150}  className=' object-contain cursor-pointer mb-3 ' />
          
        </Link>

        <ul className='hidden lg:flex flex-row gap-10'>
          <li className={`${
                active === "home" ? "text-[#01C0FE]" : "text-[#292830]"
              } hover:text-[#01C0FE] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive("home")}>
            <Link href="/">Home</Link>
          </li>
          <li className={`${
                active === "about" ? "text-[#01C0FE]" : "text-[#292830]"
              } hover:text-[#01C0FE] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive("about")}>
            <Link href="/about">About</Link>
          </li>
          <li className={`${
                active === "service" ? "text-[#01C0FE]" : "text-[#292830]"
              } hover:text-[#01C0FE] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive("service")}>
            <Link href="/service">Service</Link>
          </li>
          <li className={`${
                active === "portfolio" ? "text-[#01C0FE]" : "text-[#292830]"
              } hover:text-[#01C0FE] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive("portfolio")}>
            <Link href="/portfolio">Porfolio</Link>
          </li>
          <li className={`${
                active === "contact" ? "text-[#01C0FE]" : "text-[#292830]"
              } hover:text-[#01C0FE] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive("contact")}>
            <Link href="/contact">Contact</Link>
          </li>
          {/* {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-[#01C0FE]" : "text-[#292830]"
              } hover:text-[#01C0FE] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))} */}
        </ul>

       



        <a href="/login">
          <button type="buthrefn" className="text-[#01C0FE] bg-transparent hover:bg-[#3226AE] hover:text-[#ffff] ease-out duration-300 border-[#01C0FE] border-2 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 drop-shadow-2xl  md:block hidden md:ml-44">Call Now</button>
        </a>
        <div className='lg:hidden  flex flex-1 justify-end items-center'>
          <Image
            src={hrefggle ? "/close.svg" : "/menu.svg"}
            alt='menu' width={50} height={50} 
            className='w-[28px] h-[28px] object-contain text-black'
            onClick={() => sethrefggle(!hrefggle)}
          />

          <div
            className={`${
              !hrefggle ? "hidden" : "flex"
            } p-6 bg-white shadow-2xl absolute hrefp-20 right-0 mx-4 my-2 min-w-[340px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-center items-center flex-1 flex-col gap-4'>

              <li className={`font-poppins font-medium mb-7 cursor-pointer text-[25px] ${
                    active === "home" ? "text-[#01C0FE]" : "text-[#292830]"
                  }`}
                  onClick={() => {
                    sethrefggle(!hrefggle);
                    setActive("home");
                  }}>
                <Link href="/" className="hover:text-[#01C0FE]">Home</Link>
              </li>
              <li className={`font-poppins font-medium mb-7 cursor-pointer text-[25px] ${
                    active === "about" ? "text-[#01C0FE]" : "text-[#292830]"
                  }`}
                  onClick={() => {
                    sethrefggle(!hrefggle);
                    setActive("about");
                  }}>
                <Link href="/about" className="hover:text-[#01C0FE]">About</Link>
              </li>
              <li className={`font-poppins font-medium mb-7 cursor-pointer text-[25px] ${
                    active === "service" ? "text-[#01C0FE]" : "text-[#292830]"
                  }`}
                  onClick={() => {
                    sethrefggle(!hrefggle);
                    setActive("service");
                  }}>
                <Link href="/service" className="hover:text-[#01C0FE]">Service</Link>
              </li>
              <li className={`font-poppins font-medium mb-7 cursor-pointer text-[25px] ${
                    active === "porfolio" ? "text-[#01C0FE]" : "text-[#292830]"
                  }`}
                  onClick={() => {
                    sethrefggle(!hrefggle);
                    setActive("porfolio");
                  }}>
                <Link href="/porfolio" className="hover:text-[#01C0FE]">Porfolio</Link>
              </li>
              <li className={`font-poppins font-medium mb-7 cursor-pointer text-[25px] ${
                    active === "service" ? "text-[#01C0FE]" : "text-[#292830]"
                  }`}
                  onClick={() => {
                    sethrefggle(!hrefggle);
                    setActive("service");
                  }}>
                <Link href="/contact" className="hover:text-[#01C0FE]">Contact</Link>
              </li>
            
              {/* {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium mb-7 cursor-pointer text-[25px] ${
                    active === nav.title ? "text-[#01C0FE]" : "text-[#292830]"
                  }`}
                  onClick={() => {
                    sethrefggle(!hrefggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`} className="hover:text-[#01C0FE]">{nav.title}</a>
                </li>
              ))} */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



