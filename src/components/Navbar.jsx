import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
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
      <Link to="whyus" smooth={true} offset={-100} duration={500}><a href=''>why us?</a></Link>
        <Link to="pricing" smooth={true} offset={-100} duration={500}><a href=''>pricing</a></Link>
        <Link to="liverating" smooth={true} offset={-100} duration={500}><a href=''>live rating</a></Link>
      </div>
      <Link to="joinus" smooth={true} offset={-100} duration={500}><button className='joinus-btn'>join us!</button></Link>
    </nav>
  );
};

export default Navbar;