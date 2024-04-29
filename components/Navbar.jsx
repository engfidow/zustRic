import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showOpportunities, setOpportunities] = useState(false);
  const [submenuTimeout, setSubmenuTimeout] = useState(null);
  const [showMobileSubmenu, setShowMobileSubmenu] = useState(false); // New state for mobile submenu
  // Toggles the mobile submenu visibility
  const toggleMobileSubmenu = () => {
    setShowMobileSubmenu(!showMobileSubmenu);
  };
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (submenuSetter) => {
    if (submenuTimeout) {
      clearTimeout(submenuTimeout);
    }
    submenuSetter(true);
  };

  const handleMouseLeave = (submenuSetter) => {
    const timeout = setTimeout(() => {
      submenuSetter(false);
    }, 30); // Delay hiding the submenu by 500 milliseconds
    setSubmenuTimeout(timeout);
  };

  const menuItems = [
    { route: "/", label: "Home" },
    { route: "/about", label: "About" },
    {
      route: "/research",
      label: "Research",
      onMouseEnter: () => handleMouseEnter(setShowSubmenu),
      onMouseLeave: () => handleMouseLeave(setShowSubmenu),
    },
    {
      route: "/solutions",
      label: "Solutions & Services",
    },
    {
      route: "/opportunities",
      label: "Opportunities",
      onMouseEnter: () => handleMouseEnter(setOpportunities),
      onMouseLeave: () => handleMouseLeave(setOpportunities),
    },
    { route: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled
          ? "bg-white backdrop-blur-xl dark:bg-[#dee0e751] shadow-lg"
          : "bg-white"
      }`}
    >
      <div className="w-full flex justify-around gap-8 items-center max-w-7xl">
        <Link
          href="/"
          onClick={() => window.scrollTo(0, 0)}
          className="flex gap-5 items-center justify-center text-center"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={80}
            height={80}
            className="object-contain cursor-pointer"
          />
          <p className="text-[#1260A9] font-bold">
            Research and{" "}
            <span className="text-[#28B6EB]">Innovation Center</span>
          </p>
        </Link>

        <ul className="hidden lg:flex flex-row gap-10 relative">
          {menuItems.map((item) => (
            <li
              key={item.route}
              className={`${
                router.pathname === item.route
                  ? "text-[#01C0FE]"
                  : "text-[#292830]"
              } hover:text-[#01C0FE] text-[16px] font-medium cursor-pointer relative`}
              onMouseEnter={item.onMouseEnter}
              onMouseLeave={item.onMouseLeave}
            >
              <Link href={item.route}>{item.label}</Link>
              {item.label === "Research" && showSubmenu && (
                <ul className="absolute left-0 bg-white shadow-md mt-2 py-2 rounded-lg ">
                  <li className="px-8 py-2 hover:bg-gray-100">
                    <Link href="/research/publications">Publications</Link>
                  </li>
                  <li className="px-8 py-2 hover:bg-gray-100">
                    <Link href="/research/conference">Conferences</Link>
                  </li>
                </ul>
              )}
              {item.label === "Opportunities" && showOpportunities && (
                <ul className="absolute left-0 bg-white shadow-md mt-2 py-2 rounded-lg">
                  <li className="px-8 py-2 hover:bg-gray-100">
                    <Link href="/opportunities/partnerships">Partnerships</Link>
                  </li>
                  <li className="px-8 py-2 hover:bg-gray-100">
                    <Link href="/opportunities/scholarships">Scholarships</Link>
                  </li>
                  {/* Add more submenu items as needed */}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* mobile navigation */}

        <div className="lg:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? "/close.svg" : "/menu.svg"}
            alt="menu"
            width={50}
            height={50}
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {toggle && (
            <div className="flex p-6 bg-white backdrop-blur-xl shadow-2xl absolute top-20 right-0 mx-4 my-2 min-w-[340px] z-10 rounded-xl">
              <ul className="list-none flex justify-center items-center flex-1 flex-col gap-4">
                {menuItems.map((item, index) => (
                  <React.Fragment key={index}>
                   
                      <li
                        className={`font-poppins font-medium mb-7 cursor-pointer text-[25px] ${
                          router.pathname === item.route
                            ? "text-[#01C0FE]"
                            : "text-[#292830]"
                        }`}
                        onMouseEnter={item.onMouseEnter}
                        onMouseLeave={item.onMouseLeave}
                      >
                        <Link href={item.route} className="hover:text-[#01C0FE]" > {item.label}</Link>
                        {item.label === "Research" && showSubmenu && (
                          <ul className="absolute left-0 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] mt-2 py-2 rounded-lg w-full text-center">
                            <li className="px-8 py-2 hover:bg-gray-100">
                              <Link href="/research/publications">
                                Publications
                              </Link>
                            </li>
                            <li className="px-8 py-2 hover:bg-gray-100">
                              <Link href="/research/conference">
                                Conferences
                              </Link>
                            </li>
                          </ul>
                        )}
                        {item.label === "Opportunities" &&
                          showOpportunities && (
                            <ul className="absolute left-0 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] mt-2 py-2 rounded-lg w-full text-center">
                              <li className="px-8 py-2 hover:bg-gray-100">
                                <Link href="/opportunities/partnerships">
                                  Partnerships
                                </Link>
                              </li>
                              <li className="px-8 py-2 hover:bg-gray-100">
                                <Link href="/opportunities/scholarships">
                                  Scholarships
                                </Link>
                              </li>
                              {/* Add more submenu items as needed */}
                            </ul>
                          )}
                      </li>
                    
                  </React.Fragment>
                ))}
              </ul>
            </div>
          )}
          {/*end  mobile navigation */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
