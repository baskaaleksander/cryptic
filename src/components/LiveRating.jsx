import React, {useState} from 'react'
import { getLiveRating } from './GetLiveRating'

const LiveRating = () => {
    const [page, setPage] = useState(1);
    const data = getLiveRating();

  return (
    <div>LiveRating</div>
  )
}

export default LiveRating