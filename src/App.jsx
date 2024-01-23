import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import { scrollSpy } from 'react-scroll';
import WhyUs from './components/WhyUs';

const App = () => {
  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <>
    <Navbar />
    <Hero />
    <WhyUs />
    </>
  )
}

export default App
