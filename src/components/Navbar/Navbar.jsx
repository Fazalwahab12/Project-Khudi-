import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import logo from "../Images/logo.png";
const menuItems = [
  { title: "Home", route: "/" },
  { title: "About Us", route: "/#About" },
  { title: "Campaigns", route: "/#campaigns" },
  { title: "Meet Our Warriors", route: "/#warriors" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className="flex items-center justify-between flex-wrap m-4 md:mx-6 mx-2 md:mr-6 mr-2">
      <a href="/">
        <div className="flex items-center flex-shrink-0  cursor-pointer">
          <img src={logo} alt="Logo" className="md:h-32 md:w-32 h-28 w-28  " />{" "}
          
         
        </div>
      </a>
      <div className="hidden lg:flex xl:gap-12 gap-6 items-center xl:text-xl leading-5 px-6 pr-6 text-white bg-[#4C3F7C] p-2 rounded-[12px]">
        {menuItems.map((item, index) => (
          <a
            key={index}
            className="hover:text-[#d70081]"
            href={item.route || ""}
            target={item.target}
          >
            {item.title}
          </a>
        ))}
      </div>
      <div className="hidden lg:block">
        <a
          href="https://enterprise.rhinofi.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm px-7 pr-7 font-semibold text-white 
          bg-[#4D407C] ] p-3  rounded-md"
        >
          Donate Now
        </a>
      </div>
      <div className="lg:hidden flex">
        <span
          onClick={toggleMenu}
          className="text-xl w-12 h-12 bg-black text-white inline-flex items-center justify-center rounded-full cursor-pointer "
        >
          <FiMenu />
        </span>
      </div>
      {showMenu && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-white z-10">
          <div className="flex justify-between">
            <div className="flex items-center flex-shrink-0  cursor-pointer">
              <img src={logo} alt="Logo" className="h-20 w-20" />{" "}
              {/* Use the img tag for the logo */}
              
            </div>
            <div className="mr-2 pt-2">
              <span
                onClick={toggleMenu}
                className="text-xl w-10 mt-2 mr-1 h-10 bg-gray-400 text-black inline-flex items-center justify-center rounded-full cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-6 px-10 pt-6 text-xl font-semibold hover:text-black text-gray-600">
            {menuItems.map((item, index) => (
              <a
                key={index}
                onClick={toggleMenu}
                className="hover:text-[#EA0F7F]"
                href={item.route || ""}
                target={item.target}
              >
                {item.title}
              </a>
            ))}
            <div>
              <a
                className="text-sm px-7 pr-7 font-semibold text-white bg-[#4C3F7C] p-3  rounded-md"
                href={"https://enterprise.rhinofi.com/"}
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
