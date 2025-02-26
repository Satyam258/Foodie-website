import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
const Footer = () => {
    const socialLinks = [
        {
          icon: <FaFacebookF className="sm:size-4 size-3" />,
          color: "bg-blue-600",
        },
        { icon: <FaTwitter className="sm:size-4 size-3" />, color: "bg-sky-400" },
        { icon: <FaInstagram className="sm:size-4 size-3" />, color: "bg-red-500" },
        {
          icon: <FaLinkedinIn className="sm:size-4 size-3" />,
          color: "bg-blue-800",
        },
      ];
    
      const footerLinks = [
        { title: "Quick Links", links: ["Home", "Menu", "Services", "Reviews"] },
        {
          title: "Legal",
          links: ["Privacy Policy", "Terms of Use", "Payment Policy", "Cookies"],
        },
      ];
  return (
    <footer className='relative bg-gradient-to-br from-orange-50 via-white/40 to-orange-100
    border-t-8 border-orange-200 py-12 sm:py-16 md:py-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8
            marker:gap-10 lg:gap-8 sm:mb-12'>
                {/* Brand Section */}
                <div className='text-center sm:text-left space-y-3 sm:space-y-4'>
                    <h2 className='text-4xl sm:text-5xl md:text-4xl lg:text-4xl font-bold
                    text-orange-600 font-serif tracking-wide drop-shadow-lg inline-block
                    px-4 sm:px-6 md:px-8 sm:py-4 md:py-3 lg:py-2 border-2
                    border-gray-300 rounded-full bg-transparent'>
                        Foodie's Hub
                    </h2>
                    <p className='text-gray-700 font-comfortaa text-lg sm:text-xl md:text-xl italic'>
                        Serving happiness since 1947
                    </p>

                    <div className="flex justify-center sm:justify-start space-x-2 sm:space-x-3">
                        {socialLinks.map((item,index)=>(
                            <a href="#" key={index} className={`${item.color} text-white p-2 sm:p-3
                            rounded-full shadow-sm sm:shadow-lg transition-all transform hover:scale-110
                            hover:rotate-6`}>
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
                {/* Links section */}
                {footerLinks.map((section,index)=>(
                    <div className="text-2xl sm:text-left space-y-3 sm:space-y-4">
                        <h3 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-semibold
                        text-gray-800 font-serif tracking-wide inline-block
                        px-4 sm:px-6 md:px-8 lg:px-4 py-2 sm:py-4 md:py-3 lg:py-2 border-2
                        border-gray-300 rounded-full bg-transparent">
                            {section.title}
                        </h3>
                        <ul className="space-y-1 sm:space-y-2">
                            {section.links.map((link,linkIndex)=>(
                                <li key={linkIndex}>
                                    <a href="#" className="text-gray-700 font-comfortaa hover:text-orange-600
                                    transition-colors text-base sm:text-lg md:text-xl">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                {/* Contact section */}
                <div className="text-center sm:text-left space-y-3 sm:space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 font-serif
                    tracking-wide inline-block px-3 sm:px-4 py-1 sm:py-2 border-2
                    border-gray-300 rounded-full bg-transparent">
                        Contact Us
                    </h3>

                    <div className="space-y-2 sm:space-y-3">
                        <div className="flex justify-center sm:justify-start items-center space-x-2">
                            <FaMapMarkerAlt className="text-blue-400 shrink-0 size={18}"/>
                            <span className="text-gray-600 font-comfortaa text-base sm:text-lg
                            md:text-xl">
                                123 Food Street, Gajrola
                            </span>
                        </div>
                        <div className="flex justify-center sm:justify-start items-center space-x-2">
                            <FaRegEnvelope className="text-blue-400 shrink-0 size={18}"/>
                            <span className="text-gray-600 font-comfortaa text-base sm:text-lg
                            md:text-xl">
                                Contact@foodielover.com
                            </span>
                        </div>
                        <div className="flex justify-center sm:justify-start items-center space-x-2">
                            <FaPhoneAlt className="text-blue-400 shrink-0 size={18}"/>
                            <span className="text-gray-600 font-comfortaa text-base sm:text-lg
                            md:text-xl">
                                +91 8943567809
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Newsletter Section */}
            <div className="bg-white/30 backdrop-blur-xl rounded-xl sm:rounded-2xl p-6
            sm:p-8 lg:p-8 shadow-2xl max-w-4xl mx-auto mb-8 sm:mb-12 border border-white/20">
                <div className="text-center">
                    <h3 className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-bold mb-3 sm:mb-4
                    font-serif tracking-wide drop-shadow-md inline-block px-3 sm:px-4 md:px-8 lg:px-3
                    py-1 sm:py-2 md:py-3 lg:py-1 bg-transparent">
                        Get 15% Off on first order
                    </h3>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-orange-200 pt-6 sm:pt-8 text-center space-y-3 sm:space-y-3">
                <p className="text-gray-600 font-comfortaa text-sm sm:text-base md:text-xl">
                    &copy; {new Date().getFullYear()} Foodie's Hub. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer