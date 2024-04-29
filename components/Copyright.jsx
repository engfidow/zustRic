import React from 'react';
import {AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin, AiOutlineInstagram} from "react-icons/ai"
import {BsTiktok} from "react-icons/bs"
const Copyright = () => {
  
  return (
    <div className="flex flex-col items-center gap-y-2 lg:flex-row lg:justify-between">
      <div className="flex gap-x-6">
        
        <a className='hover:text-[#3226AE] transition' href="/contact">Contact Us</a>
      </div>
      {/* copyright text */}
      <div className="">Copyright @ 2024 ZUST RIC</div>
       {/* social icons */}
      <ul className="flex gap-x-[12px]">
        <li>
          <a href="https://www.facebook.com/ZUSTUniversity">
          <AiFillFacebook/>
          </a>
        </li>
        <li>
          <a href="https://x.com/ZUSTUni?t=XFsLnK5lyszfK-Mw7goPMQ&s=08">
          <AiFillTwitterSquare/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/zamzamuniversity/">
          <AiFillLinkedin/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/zustuniversity?igsh=MXFneTQ2ZWU3aXltMQ==">
          <AiOutlineInstagram/>
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@zustuniversity?_t=8llOmi6lBED&_r=1">
          <BsTiktok/>
          </a>
        </li>
        
      </ul>
    </div>
  );
};

export default Copyright;
