import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import { scrollSpy } from 'react-scroll';
import WhyUs from './components/WhyUs';
import Pricing from './components/Pricing';
import LiveRating from './components/LiveRating';

const App = () => {
  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <>
    <Navbar />
    <Hero />
    <WhyUs />
    <Pricing />
    <LiveRating />
    </>
  )
}

export default App
