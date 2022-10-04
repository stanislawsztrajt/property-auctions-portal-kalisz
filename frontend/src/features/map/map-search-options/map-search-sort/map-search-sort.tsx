import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'

const MapSearchSort: FC = () => {
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState('')
  const [isFirstTime, setIsFirstTime] = useState(false);
  useEffect(() => {
    if (isFirstTime) {
      router.push({ pathname: '/', query: { ...router.query, sort: selectedOption } })
    }
    else setIsFirstTime(true)
  }, [selectedOption])
  
  return(
    <select onChange={e => setSelectedOption(e.target.value)} name="sortOptions" id="sortOptions">
      <option defaultChecked value='{ "sort": { "by": "DESC", "name": "createdAt" } }'>Najnowsze</option>
      <option value='{ "sort": { "by": "ASC", "name": "createdAt" } }'>Najstarsze</option>
      <option value='{ "sort": { "by": "DESC", "name": "price" } }'>Najdroższe</option>
      <option value='{ "sort": { "by": "ASC", "name": "price" } }'>Najtańsze</option>
    </select>
  )
}

export default MapSearchSort