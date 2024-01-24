import React, { useEffect, useState } from 'react'

const getLiveRating = () => {
    const [liveRating, setLiveRating] = useState([])

    useEffect(() => {
        const fetchLiveRating = async () => {
            const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
            const data = await res.json()
            setLiveRating(data)
        }
        fetchLiveRating()
    }, [])

  return liveRating
}

export default getLiveRating