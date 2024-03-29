import React from 'react'
import { GoCheck } from "react-icons/go";
import { Link } from 'react-scroll';



const PricingCard = ( {card} ) => {

  const featuresActive = card.featuresactive.map((feature, index) => {
    return <li key={index} className='li-active'><GoCheck /> {feature}</li>
  })

  const featuresInactive = card.featuresinactive.map((feature, index) => {
    return <li key={index} className='li-inactive'>{feature}</li>
  })

  return (
    <div className='pricing-item'>
        <h2>
          {card.title}
        </h2>
        <p className='features-text'>Features</p>
        <ul className='features-active'>
          {featuresActive}
        </ul>
        <ul className='features-inactive'>
          {featuresInactive}
        </ul>
        <h3>{card.price}</h3>
        <Link to="joinus" smooth={true} offset={-100} duration={500}><button className='joinus-btn'>Join us now!</button></Link>
    </div>
  )
}

export default PricingCard