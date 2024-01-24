import React from 'react'
import PricingCard from './PricingCard'
import { Link, Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Pricing = () => {
  const pricingCardsInfo = [
    {
      title: 'Standard',
      price: '$10 / mo',
      featuresactive: ['Tactical Trade Signals', 'Tactical Market Updates', 'Pathways to Profit'],
      featuresinactive: ['Premium Indicator Suite', 'Trading Academy', 'Group & One-on-One Coaching', '24/7 Live Chat and Email Support']
    },
    {
      title: 'Premium',
      price: '$50 / mo',
      featuresactive: ['Tactical Trade Signals', 'Tactical Market Updates', 'Pathways to Profit', 'Premium Indicator Suite', 'Trading Academy', 'Group & One-on-One Coaching', '24/7 Live Chat and Email Support'],
      featuresinactive: []
    },
    {
      title: 'Standard+',
      price: '$20 / mo',
      featuresactive: ['Tactical Trade Signals', 'Tactical Market Updates', 'Pathways to Profit', 'Premium Indicator Suite', 'Trading Academy'],
      featuresinactive: ['Group & One-on-One Coaching', '24/7 Live Chat and Email Support']
    },
  ]

  const pricingCards = pricingCardsInfo.map((card, index) => {
    return <PricingCard key={index} card={card} />
  })

  return (
    <Element name="pricing">
    <div className='pricing-container'>
        {pricingCards}
    </div>
    </Element>
  )
}

export default Pricing