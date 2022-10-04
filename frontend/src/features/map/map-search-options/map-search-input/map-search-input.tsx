import React, { FC } from 'react'
import useMapSearchInput from './use-map-search-input'

const MapSearchInput: FC = () => {
  const { setValue } = useMapSearchInput()

  return(
    <>
      <input type="text" onChange={(e) => setValue(e.target.value)} placeholder='Search' />
    </>
  )
}

export default MapSearchInput