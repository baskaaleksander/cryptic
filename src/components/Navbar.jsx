import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import useScreenSize from './useScreenSize';
import Hamburger from 'hamburger-react'

const navLinks = ["why us?", "pricing", "live rating"];

const navElements = navLinks.map((link, index) => {
  return <Link key={index} to={link} smooth={true} offset={-100} duration={500}><a href=''>{link}</a></Link>
});


const Navbar = () => {
  const screenSize = useScreenSize();
  return(screenSize < 930 ? <NavMobile /> : <NavNormal />)
}

const NavMobile = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setOpen] = useState(true)
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    const throttleScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttleScroll);
    };
  }, []);
  return (
    <nav className={`mobile-nav ${scrollPosition >= 100 && "sticky-nav"}`}>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {isOpen && <div className='nav-links'>
        {navElements}
        <Link to="joinus" smooth={true} offset={-100} duration={500}><button className='joinus-btn'>join us!</button></Link>
      </div>}

    </nav>
  )
}

const NavNormal = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    const throttleScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttleScroll);
    };
  }, []);

  return (
    <nav className={scrollPosition >= 100 && "sticky-nav"}>
      <h2 className='nav-logo'>
      <Link to="hero" smooth={true} offset={-100} duration={500}><span className='gradient-span'>cryptic</span>.ai</Link>
      </h2>
      <div className='nav-links'>
        {navElements}
      </div>
      <Link to="joinus" smooth={true} offset={-100} duration={500}><button className='joinus-btn'>join us!</button></Link>
    </nav>
  );
}




export default Navbar;