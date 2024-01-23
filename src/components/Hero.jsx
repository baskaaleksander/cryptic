import React from 'react'
import Spline from '@splinetool/react-spline';
import { GoArrowRight } from "react-icons/go";


const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
          <div className='hero-text'>
            <p className='badge'>AI Powered</p>
            <h2>Unleash <span className='gradient-span'>power</span> of cryptocurrencies</h2>
            <h3>Get <span className='gradient-span'>rich</span> today!</h3>
            <div className='hero-newsletter'>
              <input type='email' placeholder='Enter your email address'/>
              <button><GoArrowRight /></button>
            </div>
            <div className='hero-stats'>
              <div className='hero-stats-item'>
                <h3 className='gradient-span'>1.5M+</h3>
                <p>Users</p>
              </div>
              <div className='divider' />
              <div className='hero-stats-item'>
                <h3 className='gradient-span'>10+</h3>
                <p>Years</p>
              </div>
              <div className='divider' />
              <div className='hero-stats-item'>
                <h3 className='gradient-span'>100+</h3>
                <p>Currencies</p>
              </div>
            </div>
          </div>
        </div>
        <div className='hero-spline'>
            <Spline style="" scene="https://prod.spline.design/63xZmm5N2qwTmn7o/scene.splinecode"/>
        </div>
    </div>
  )
}

export default Hero