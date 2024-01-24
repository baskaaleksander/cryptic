import React, {useEffect, useState} from 'react'
import { getLiveRating } from './GetLiveRating'

const LiveRating = () => {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const tableElements = getLiveRating();

    // useEffect(() => {
    //     const fetchLiveRating = async () => {
    //         const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=6&page=${page}&sparkline=false&locale=en`)
    //         const data = await res.json()
    //         setData(data)
    //     }
    //     fetchLiveRating()
    
    // }, [])
       

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
                {tableElements}
            </tbody>
        </table>
    </div>   
  )
}

export default LiveRating