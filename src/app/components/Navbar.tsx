import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen,  setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
   setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
        <div className='text-xl font-medium '><b>OSAMA NADEEM.</b></div>

        <br />

       <ul className='gap-10 lg:gap-16 hidden md:flex'>
        <li className='menuLink'>
          <a href='#home'><b>Home</b></a>
        </li>
        <li className='menuLink'>
          <a href='#project'><b>Project</b></a>
        </li>
        <li className='menuLink'>
          <a href='#skills'><b>Skills</b></a>
        </li>
        <li className='menuLink'>
          <a href='#contact'><b>Contact</b></a>
        </li>
        <li className='menuLink'>
          <a href='#about'><b>About</b></a>
        </li>
        
       </ul>
       <div className='md:hidden' onClick={toggleMenu}>
        {isMenuOpen ? <AiOutlineClose size={30} /> :
        <AiOutlineMenu size={30} />
        }
       </div>
       </div>
     
     {isMenuOpen && (
      <ul className='flex flex-col gap-4 mt-4 md:hidden'>
        <li className='menuLink'>
          <a href="#hero" onClick={toggleMenu}>Home</a>
        </li>

        <li className='menuLink'>
          <a href="#about" onClick={toggleMenu}>About</a>
        </li>

        <li className='menuLink'>
          <a href="#project" onClick={toggleMenu}>Project</a>
        </li>
        
        <li className='menuLink'>
          <a href="#skills" onClick={toggleMenu}>Skills</a>
        </li>

        <li className='menuLink'>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </li>
      </ul>
     )
     }
    </div>
  )
}
export default Navbar