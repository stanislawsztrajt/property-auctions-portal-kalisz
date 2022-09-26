import { Iauction } from "@features/auctions/types";
import React, { FC, useEffect, useState } from "react";
import { faBuilding, faHouse, faQuestion, faTents, faWheatAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  $hover: boolean
  auction: Iauction
  lat: number
  lng: number
}

const MapMarkerItem: FC<Props> = ({ $hover, auction }) => {
  const [icon, setIcon] = useState(faQuestion)
  console.log(auction)
  useEffect(() => {
    console.log(auction)
    switch(auction.type) {
      case 'dom': 
        setIcon(faHouse)
      break;
      case 'działka': 
        setIcon(faTents)
      break;
      case 'pole': 
        setIcon(faWheatAlt)
      break;
      case 'mieszkanie': 
        setIcon(faBuilding)
      break;
    }
  }, [])
  
  return (
    <div className='marker'>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export default MapMarkerItem;
