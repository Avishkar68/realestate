import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
      <nav className="w-full h-[80px] p-4 text-white flex justify-between px-4 md:px-[60px] items-center bg-transparent fixed z-50">
        <div className='text-[28px] md:text-[36px] font-garamond'>Villa Sofia</div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 justify-center items-center text-[16px] font-sans gap-4">
          <li><Link to="/" className="hover:underline cursor-pointer">Gallery</Link></li>
          <li><Link to="/info" className="hover:underline cursor-pointer">Info</Link></li>
          <li><Link to="/explore" className="hover:underline cursor-pointer">Explore</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          <button className='text-[12px] font-sans border-[1px] cursor-pointer border-white rounded-2xl px-8 py-1 hover:bg-white hover:text-black transition duration-300'>inquire</button>
        </ul>
        
        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col items-end gap-1.5">
            <span className={`block h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
            <span className={`block h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-5'}`}></span>
            <span className={`block h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-4'}`}></span>
          </div>
        </button>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`fixed top-[0px] h-screen flex items-center justify-center left-0 w-full bg-black text-white bg-opacity-90 z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <ul className="flex flex-col items-center py-4 space-y-6 text-[20px] font-garamond ">
          <li><Link to="/" className="hover:underline cursor-pointer" onClick={() => setIsMenuOpen(false)}>Gallery</Link></li>
          <li><Link to="/info" className="hover:underline cursor-pointer" onClick={() => setIsMenuOpen(false)}>Info</Link></li>
          <li><Link to="/explore" className="hover:underline cursor-pointer" onClick={() => setIsMenuOpen(false)}>Explore</Link></li>
          <li><Link to="/contact" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          <button className='text-[12px] font-sans border-[1px] cursor-pointer border-white rounded-2xl px-8 py-1 hover:bg-white hover:text-black transition duration-300'>inquire</button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar