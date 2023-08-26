import Image from "next/image";
import Link from "next/link";
import React from "react";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer
      className="pt-[142px] pb-[60px] shadow-2xl mt-16 "
      data-aos='fade-up' data-aos-delay='200'
    >
      <div className=" mx-[10%]">
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-between gap-y-8">
          {/* logo */}
          <div className="flex flex-col">
            <a href="/" >
              <Image
                src="/logo.png"
                width={150}
                height={150}
                alt="logo"
                className=" object-contain cursor-pointer mb-3 mr-4"
              />
            </a>
            
          </div>
          {/* list 1 */}
          <div className="">
            <div className="text-2xl uppercase font-medium mb-6">Links</div>
            <ul className="flex flex-col gap-y-3">
              <li>
                <Link
                  href="/"
                  className="font-medium hover:text-[#3226AE] transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium hover:text-[#3226AE] transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium hover:text-[#3226AE] transition"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium hover:text-[#3226AE] transition"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium hover:text-[#3226AE] transition"
                >
                  Contact
                </Link>
              </li>
              {/* {links.map((item, index) => {
                const { href, name } = item;
                return (
                  <li key={index}>
                    <a
                      href={href}
                      className="font-medium hover:text-[#3226AE] transition"
                    >
                      {name}
                    </a>
                  </li>
                );
              })} */}
            </ul>
          </div>
          {/* list 2 */}
          <div className="">
            <div className="text-2xl uppercase font-medium mb-6">
              Contact us 👋
            </div>
            <ul className="flex flex-col gap-y-3">
              <li>
                <Link
                  href="/"
                  className="font-medium hover:text-[#3226AE] transition"
                >
                  info@barbaar.com
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium hover:text-[#3226AE] transition"
                >
                  support@barbaar.com
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium hover:text-[#3226AE] transition"
                >
                  +252 68 2469706
                </Link>
              </li>
              {/* {legal.map((item, index) => {
                const { href, name } = item;
                return (
                  <li key={index}>
                    <Link
                      href=""
                      className="font-medium hover:text-[#3226AE] transition"
                    >
                     info@barbaar.com
                    </Link>
                  </li>
                );
              })} */}
            </ul>
          </div>
          {/* news latter */}
          <div className="">
            <div className="text-2xl uppercase font-medium mb-6">NEWSLETTER</div>
            <div className="text-xl text-light mb-[18px]">Over 25000 people have subscribed</div>
            {/* form */}
            <form className="max-w-[349px] mb-[10px]">
              <div
                className="h-[62px] p-[7px] flex border border-dark rounded-lg"
              >
                <input
                  className="w-full h-full pl-6 border-none outline-none placeholder:text-light"
                  type="text"
                  placeholder="Enter your email"
                />
                <button className="px-6 bg-[#3226AE] rounded-lg text-white hover:bg-[#3C6EED] transition-all"> Subscribe </button>
              </div>
            </form>
            <span className="text-sm text-light">We don't sell your email and spam</span>
          </div>
        </div>
        <hr className="mt-10 mb-5 w-full"/>
        <Copyright/>
      </div>
    </footer>
  );
};

export default Footer;
