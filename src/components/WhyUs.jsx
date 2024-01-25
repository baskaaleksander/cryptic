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

                </p>
            </div>
            <div className="two">
                <h2>
                    Security
                </h2>
                <p>

                </p>
            </div>
            <div className="three">
                <h2>
                    Speed
                </h2>
                <p>

                </p>
            </div>
            <div className="four">
                <h2>
                    Support
                </h2>
                <p>

                </p>
            </div>
            <div className="five">
                <h2>
                    Transparency
                </h2>
                <p>

                </p>
            </div>
            <div className="six">
                <h2>
                    Simplicity
                </h2>
                <p>

                </p>
            </div>
        </div>
        </Element>
    </motion.div>
  )
}

export default WhyUs