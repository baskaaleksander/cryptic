import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import { scrollSpy } from 'react-scroll';
import WhyUs from './components/WhyUs';
import Pricing from './components/Pricing';
import LiveRating from './components/LiveRating';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';

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
    <JoinUs />
    <Footer />
    </>
  )
}

export default App
