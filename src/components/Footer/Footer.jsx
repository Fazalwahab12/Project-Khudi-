import React from "react";
import logo from "../Images/logo.png";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiMail,
  FiPhoneCall,
} from "react-icons/fi";
import { TiSocialGooglePlus, TiLocation } from "react-icons/ti";
import "../Footer/Footer.css";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
        <div className="flex-1  ">
          <img src={logo} alt="Project Khudi" className="h-32 w-32 mb-4" />
          <p>
            Project Khudi aims to empower Pakistan economically starting from
            delivering FREE small scale businesses, while forming an ecosystem
            that encourages startups & entrepreneurs in the future.
          </p>
          <div className="flex space-x-4 mt-6">
            <button className="bg-blue-600 p-2 rounded-full">
              <FiFacebook size={20} />
            </button>
            <button className="bg-blue-400 p-2 rounded-full">
              <FiTwitter size={20} />
            </button>
            <button className="bg-pink-600 p-2 rounded-full">
              <FiInstagram size={20} />
            </button>
            <button className="bg-red-600 p-2 rounded-full">
              <TiSocialGooglePlus size={20} />
            </button>
          </div>
        </div>
        <div className="flex-1 mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-4 pt-4 md:pt-0">Services</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Causes</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Latest News</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact Us</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Events</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p className="mb-4">Would you have any inquiries? Please feel free to contact us:</p>
          <div className="flex items-center space-x-2 mb-2">
            <FiMail size={20} />
            <a href="mailto:charitio@gmail.com" className="hover:underline">
              charitio@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <FiPhoneCall size={20} />
            <a href="tel:+888123869523" className="hover:underline">
              +888 (123) 869523
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <TiLocation size={20} />
            <span>Pakistan</span>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 py-2 bg-gray-800">
        <p>© 2024 Developed by Devmate Solutions. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
