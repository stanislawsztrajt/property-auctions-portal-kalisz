import React, { FC } from 'react'
import { MapSearchInput, MapSearchFilters, MapSearchSort } from '../'
import useMapSearchOptions from './use-map-search-options'

const MapSearchOptions: FC = () => {
  useMapSearchOptions()
  return(
    <div>
      <MapSearchInput />
      <MapSearchFilters />
      <MapSearchSort />
    </div>
  )
}

export default MapSearchOptions
  