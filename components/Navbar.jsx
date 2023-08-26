"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20  ${
        scrolled ? 'bg-white/10 backdrop-blur-xl dark:bg-[#dee0e751] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className='w-full flex justify-around gap-10 items-center max-w-7xl '>
        <Link href='/' onClick={() => window.scrollTo(0, 0)}>
          <Image src='/logo.png' alt='logo' width={150} height={150} className='w-70 object-contain cursor-pointer mb-3' />
        </Link>

        <ul className='hidden lg:flex flex-row gap-10'>
          {[
            { route: '/', label: 'Home' },
            { route: '/about', label: 'About' },
            { route: '/service', label: 'Service' },
            { route: '/portfolio', label: 'Portfolio' },
            { route: '/contact', label: 'Contact' },
          ].map((item) => (
            <li
              key={item.route}
              className={`${
                router.pathname === item.route ? 'text-[#01C0FE]' : 'text-[#292830]'
              } hover:text-[#01C0FE] text-[18px] font-medium cursor-pointer`}
            >
              <Link href={item.route}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <a href='/login'>
          <button
            type='button'
            className='text-[#01C0FE] bg-transparent hover:bg-[#3226AE] hover:text-white ease-out duration-300 border-[#01C0FE] border-2 hover:border-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 drop-shadow-2xl md:block hidden md:ml-44'
          >
            Call Now
          </button>
        </a>
        <div className='lg:hidden flex flex-1 justify-end items-center'>
          <Image
            src={toggle ? '/close.svg' : '/menu.svg'}
            alt='menu'
            width={50}
            height={50}
            className='w-[28px] h-[28px] object-contain text-black'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 bg-white/30 backdrop-blur-xl shadow-2xl absolute top-20 right-0 mx-4 my-2 min-w-[340px] z-10 rounded-xl` }
            
          >
            <ul className='list-none flex justify-center items-center flex-1 flex-col gap-4'>
              {[
                { route: '/', label: 'Home' },
                { route: '/about', label: 'About' },
                { route: '/service', label: 'Service' },
                { route: '/portfolio', label: 'Portfolio' },
                { route: '/contact', label: 'Contact' },
              ].map((item) => (
                <li
                  key={item.route}
                  className={`font-poppins font-medium mb-7 cursor-pointer text-[25px] ${
                    router.pathname === item.route ? 'text-[#01C0FE]' : 'text-[#292830]'
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    window.scrollTo(0, 0);
                  }}
                >
                  <Link href={item.route} className='hover:text-[#01C0FE]'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
