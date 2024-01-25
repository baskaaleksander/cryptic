import React from 'react'
import { Element } from 'react-scroll';
import { motion } from "framer-motion"


const WhyUs = () => {
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
    <Element name="whyus">
        <div className="grid-container">
            <div class="one">
                <h2>
                    Reliability
                </h2>
                <p>
                    We have almost 10 years of experience in the cryptocurrency market. We have been through many ups and downs and we know how to deal with them. We are here to help you!
                </p>
            </div>
            <div className="two">
                <h2>
                    Security
                </h2>
                <p>
                    We are using the most advanced security systems to protect your data. We are also using the most advanced encryption methods to protect your data.
                </p>
            </div>
            <div className="three">
                <h2>
                    Speed
                </h2>
                <p>
                    We are using the most advanced technology to make sure that your data is always up to date. We are also using the most advanced encryption methods to protect your data.
                </p>
            </div>
            <div className="four">
                <h2>
                    Support
                </h2>
                <p>
                    We are always here to help you. We are always here to answer your questions. We are always here to help you.
                </p>
            </div>
            <div className="five">
                <h2>
                    Transparency
                </h2>
                <p>
                    Every our trade is visible to everyone. We are not hiding anything from you. We are not hiding anything from you.
                </p>
            </div>
            <div className="six">
                <h2>
                    Simplicity
                </h2>
                <p>
                    You don't need to be a professional trader to use our platform. You don't need to be a professional trader to use our platform.
                </p>
            </div>
        </div>
        </Element>
    </motion.div>
  )
}

export default WhyUs