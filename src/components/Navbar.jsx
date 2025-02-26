// for icons use react icons website which ca directly import different icons
import React, { useState } from 'react';
import { FaBars, FaHome, FaListAlt, FaQuoteLeft, FaSearch, FaShoppingCart, FaTimes, FaUser, FaUtensils } from "react-icons/fa";

const Navbar = () => {

  const [isopen, setIsOpen] = useState(false);

  const menuItem = [
    { icon: <FaHome />, text: "Home" },
    { icon: <FaUtensils />, text: "Services" },
    { icon: <FaListAlt />, text: "Menu" },
    { icon: <FaQuoteLeft />, text: "Reviews" },
  ]
  return (
    <nav className='absolute top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500
    shadow-lg rounded-full px-3 sm:px-4 md:px-4 lg:px-8 md:py-3 w-[95%] md:w-[90%] max-w-7xl flex items-centre justify-between
    backdrop-blur-md border border-white/20 z-50'>
      {/* Logo section */}
      <div className='flex items-center space-x-2'>
        <div className='p-2 bg-white/20 rounded-full backdrop-blur-sm'>
          <FaUtensils className='text-xl text white animate-pulse' />
        </div>
        <h1 className='text-xl font-pacifico lg:text-2xl md:text-sm font-bold text-black'>
          Foodie's <span className='text-orange-800 ml-2'>Hub</span>
        </h1>
      </div>
      {/* center navigation */}
      <div className='hidden md:flex space-x-4 lg:space-x-8'>
        {menuItem.map((item, index) => (
          <button key={index} className='flex items-center space-x-2 text-black hover:text-orange-600
            transitioin-all duration-300 focus:outline-none'>
            <span className='text-lg transition-transform group-hover:scale-125 cursor-pointer'>
              {item.icon}
            </span>
            <span className='text-base font-semibold md:text-sm group-hover:underline decoration-2
            underline-offset-4 cursor-pointer'>
              {item.text}
            </span>
          </button>
        ))}

      </div>
      {/* Right section */}
      <div className='flex items-center space-x-3'>
        <div className='relative hidden sm:block'>
          <input type="text" placeholder='Search...' className='w-28 md:w-32 lg:w-48
          border border-gray-100 rounded-full py-1 pl-3 pr-10
          text-sm focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-transparent
          transition duration-300' />
          <FaSearch className='absolute right-3 top-1/2 tran  -translate-y-1/2 text-gray-500
          hover:scale-110 transition-transform text-base cursor-pointer' />
        </div>
        {/* Cart login */}
        <div className='flex items-center space-x-3'>
          <button className='p-2 md:text-sm bg-white/20 rounded-full
            hover:bg-white/30 transition-all focus:outline-none'>
            <FaShoppingCart className='text-lg text-white' />
          </button>
          <button className='hidden sm:flex items-center space-x-2 bg-gradient-to-br
            from-yellow-300 to-orange-400 px-2 md:px-0.5 lg:px-4 py-2 rounded-full
            hover:shadow-lg hover:scale-105 transition-all focus:outline-none
            whitespace-nowrap'>
            <FaUser className='text-white md:text-sm text-lg cursor-pointer' />
            <span className='font-semibold text-white text-xs sm:text-sm md:text-sm
              lg:text-base cursor-pointer'>
              Login
            </span>
          </button>
        </div>
        <button onClick={() => setIsOpen(!isopen)} aria-label='Toggle Menu'
          className='md:hidden p-2 text-white hover:text-yellow-300
        transition-all focus:outline-none'>
          {isopen ? <FaTimes className='text-xl' /> : <FaBars className='text-xl' />}
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-red-500 to-orange-600 rounded-2xl shadow-xl mt-3 ex-4 transition-all duration-300 transform ${isopen ? "opacity-100 visible scale-100": "opacity-0 invisible scale-85"}`}>
        <div className='P-4 space-y-4'>
          {menuItem.map((item,index)=>(
            <button key={index} className='w-full flex items-center space-x-3
            text-white hover:bg-white/20 px-4 py-3 rounded-xl transition-all focus:outline-none'>
              <span className='text-xl'>{item.icon}</span>
              <span className='text-lg'>{item.text}</span>
            </button>
          ))}
          <div className='sm:hidden'>
            <div className='flex items-center bg-white/20 rounded-full px-3 w-full'>
              <input type="text" placeholder='Search...' className='w-full bg-transparent border-0
              text-white py-1 flex-1 focus:outline-none text-sm' />
              <FaSearch className='text-white/80'/>
            </div>
          </div>
          {/* Button */}
           <button className='w-full sm:hidden flex items-center justify-center 
           bg-gradient-to-br from-yellow-300 to-orange-400 px-4 py-2
           rounded-full hover:shadow-lg transition-all focus:outline-none mb-0.5'>
            <FaUser className='text-white'/>
            <span className='font-semibold text-white text-base '>
              Login
            </span>

           </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;