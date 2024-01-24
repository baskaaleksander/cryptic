import React, { useEffect, useState } from 'react'

export const getLiveRating = () => {
    const [liveRating, setLiveRating] = useState([]);
    const tableElements = [];
  
    useEffect(() => {
      const fetchLiveRating = async () => {
        try {
          const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
          const data = await res.json();
          setLiveRating(data);
        } catch (error) {
          console.error('Error fetching live rating:', error);
        }
      };
  
      fetchLiveRating();
    }, []);
  
    // Populate tableElements after liveRating has been updated
    for (let i = 0; i < 6 && i < liveRating.length; i++) {
      tableElements.push(
        <tr key={i}>
          <td><img src={liveRating[i].image} alt='logo' className='live-rating-img'/></td>
          <td>{liveRating[i].name}</td>
          <td>{liveRating[i].current_price}</td>
          <td>{liveRating[i].market_cap}</td>
          <td>{liveRating[i].price_change_percentage_24h}</td>
        </tr>
      );
    }
    
  return tableElements
}
