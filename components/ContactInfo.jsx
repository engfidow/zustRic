import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ContactInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-[10rem]">
      <h1 className="lg:text-5xl text-3xl mb-10 text-black font-bold" data-aos="fade-up" data-aos-delay="500">
        Take A Coffee & Chat With Us
      </h1>
      <div className="grid gap-10 md:grid-cols-2 mx-auto">
        <ContactMethod
          icon="/contact/gmail.png"
          title="Send us Mail"
          email="info@barbaar.com"
        />
        <ContactMethod
          icon="/contact/whatsapp.png"
          title="Chat Us"
          email="+252 68 2469706"
        />
      </div>
    </div>
  );
};

const ContactMethod = ({ icon, title, email }) => {
  return (
    <div className="bg-white shadow-2xl rounded-lg flex gap-10 p-5 items-center justify-center text-start " data-aos="fade-up" data-aos-delay="600">
      <div className="bg-[#E5E9FF] rounded-lg p-3">
        <Image src={icon} alt="" width={30} height={30} />
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="font-bold">{title}</h4>
        <Link className="text-[#3EC1F3]" href={`mailto:${email}`}>
          {email}
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;