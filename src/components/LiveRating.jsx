import React, {useState} from 'react'
import { getLiveRating } from './GetLiveRating'

const LiveRating = () => {
    const [loading, setLoading] = useState(true);
    const tableElements = getLiveRating();
    const [items, setItems] = useState(10);
    const [activeButton, setActiveButton] = useState(null); // New state for active button

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
        pageButtons.push(<button key={i} onClick={buttonHandler} className={i === 0 ? "live-rating-btn-active" : "live-rating-btn"}>{i+1}</button>)
    }


  return (
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
  )
}

export default LiveRating