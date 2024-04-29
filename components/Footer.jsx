import Image from "next/image";
import Link from "next/link";
import React from "react";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer
      className="pt-[142px] pb-[60px] shadow-2xl mt-16 "
     
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
                  href="/about"
                  className="font-medium hover:text-[#3226AE] transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="font-medium hover:text-[#3226AE] transition"
                >
                  Research
                </Link>
              </li>
              
              <li>
                <Link
                  href="/contact"
                  className="font-medium hover:text-[#3226AE] transition"
                >
                  Contact
                </Link>
              </li>
              
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
                  info@ric.zust.edu.so
                </Link>
              </li>
             
              <li>
                <Link
                  href="/"
                  className="font-medium hover:text-[#3226AE] transition"
                >
                  +252 61 5486345
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
          
         {/* list 1 */}
         <div className="">
            <div className="text-2xl uppercase font-medium mb-6">Academics</div>
            <ul className="flex flex-col gap-y-3">
              <li>
                <Link
                  href="https://zust.edu.so/faculty-of-agricultural-science/"
                  className="font-medium hover:text-[#3226AE] transition"
                >
                 Faculty of Agricultural Science
                </Link>
              </li>
              <li>
                <Link
                  href="https://zust.edu.so/faculty-of-medicine-surgery/"
                  className="font-medium hover:text-[#3226AE] transition"
                >
                  Faculty of Medicine & Surgery
                </Link>
              </li>
              <li>
                <Link
                  href="https://zust.edu.so/faculty-of-engineering-technology/"
                  className="font-medium hover:text-[#3226AE] transition"
                >
                  Faculty of Engineering Technology
                </Link>
              </li>
              
              <li>
                <Link
                  href="https://zust.edu.so/faculty-of-computer-and-information-science/"
                  className="font-medium hover:text-[#3226AE] transition"
                >
                  Faculty of Computer and Information Science
                </Link>
              </li>
              <li>
                <Link
                  href="https://zust.edu.so/faculty-of-health-science/"
                  className="font-medium hover:text-[#3226AE] transition"
                >
                  Faculty of Health Science
                </Link>
              </li>
              <li>
                <Link
                  href="https://zust.edu.so/faculty-of-business-and-management/"
                  className="font-medium hover:text-[#3226AE] transition"
                >
                 Faculty of Business and Management
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
        <hr className="mt-10 mb-5 w-full"/>
        <Copyright/>
      </div>
    </footer>
  );
};

export default Footer;
