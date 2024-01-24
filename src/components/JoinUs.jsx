import React from 'react'
import image from '../assets/joinusimg.png'
import { Element } from 'react-scroll';


const JoinUs = () => {
  return (
    <Element name="joinus">
    <div className='join-us'>
        <div className='join-us-left'>
            <h2>Join to our <span className='gradient-span'>discord</span> now!</h2>
            <p>Join our discord server to get access to our premium features, access to qualified people from all around the world and many more! We are waiting for you!</p>
            <button className='joinus-btn'>Click me!</button>
        </div>
    <img src={image} alt='join us' className='join-us-img'/>
    </div>
    </Element>
  )
}

export default JoinUs