import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="pt-[142px] pb-[60px] shadow-2xl"
     
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-between gap-y-8">
          {/* logo */}
          <div>
            <a href="/" className="flex ">
              <Image
                src="/logo.png"
                width={150}
                height={150}
                alt="logo"
                className=" object-contain cursor-pointer mb-3 mr-4"
              />
            </a>
            <h3>
              Join us on this transformative journey, and together, we will
              elevate your digital presence and drive business success.
            </h3>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
