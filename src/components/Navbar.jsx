import React, { useState, useEffect } from 'react';

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
    <nav>
      <h2 className='nav-logo'>
        <span className='gradient-span'>cryptic</span>.ai
      </h2>
      <div className='nav-links'>
        <a href='#why-us'>why us?</a>
        <a href='#pricing'>pricing</a>
        <a href='#live-rating'>live rating</a>
      </div>
      <button className='joinus-btn'>join us!</button>
    </nav>
  );
};

export default Navbar;