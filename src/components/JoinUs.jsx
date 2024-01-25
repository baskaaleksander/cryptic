import React from 'react'
import image from '../assets/joinusimg.png'
import { Element } from 'react-scroll';
import { motion } from "framer-motion";


const JoinUs = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 }
      }}
    >
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
    </motion.div>
  )
}

export default JoinUs