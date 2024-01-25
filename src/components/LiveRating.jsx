import React, {useState} from 'react'
import { getLiveRating } from './getLiveRating'
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

const LiveRating = () => {
    const tableElements = getLiveRating();
    const [items, setItems] = useState(10);
    const [activeButton, setActiveButton] = useState(null);

    function buttonHandler(e) {
        setItems(e.target.innerHTML * 10);
        if (activeButton) activeButton.classList.remove('live-rating-btn-active');
        e.target.classList.add('live-rating-btn-active');
        setActiveButton(e.target);
    }
    const pageElements = [...tableElements].splice(items - 10, 10)
    const pages = tableElements.length / 10;
    let pageButtons = [];
    for (let i = 0; i < pages; i++) {
        pageButtons.push(<button key={i} onClick={buttonHandler} className="live-rating-btn">{i+1}</button>)
    }


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
        <Element name="liverating">
            <div className='live-rating'>
                <table>
                    <thead>
                        <tr>
                            <td>Logo</td>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Market price</td>
                            <td>Change</td>
                        </tr>
                    </thead>
                    <tbody>
                        {pageElements}
                    </tbody>
                </table>
                <div className='live-rating-buttons'>
                    {pageButtons}
                </div>
            </div>
        </Element>
    </motion.div>   
  )
}

export default LiveRating