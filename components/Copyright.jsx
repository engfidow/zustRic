import React from 'react';
import {AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin, AiOutlineInstagram} from "react-icons/ai"
import {BsTiktok} from "react-icons/bs"
const Copyright = () => {
  
  return (
    <div className="flex flex-col items-center gap-y-2 lg:flex-row lg:justify-between">
      <div className="flex gap-x-6">
        <a className='hover:text-[#3226AE] transition'  href="/">Privacy & Terms</a>
        <a className='hover:text-[#3226AE] transition' href="/contact">Contact Us</a>
      </div>
      {/* copyright text */}
      <div className="">Copyright @ 2023 Barbaar Tech</div>
       {/* social icons */}
      <ul className="flex gap-x-[12px]">
        <li>
          <a href="">
          <AiFillFacebook/>
          </a>
        </li>
        <li>
          <a href="">
          <AiFillTwitterSquare/>
          </a>
        </li>
        <li>
          <a href="">
          <AiFillLinkedin/>
          </a>
        </li>
        <li>
          <a href="">
          <AiOutlineInstagram/>
          </a>
        </li>
        <li>
          <a href="">
          <BsTiktok/>
          </a>
        </li>
        
      </ul>
    </div>
  );
};

export default Copyright;
