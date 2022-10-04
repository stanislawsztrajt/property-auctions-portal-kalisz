import React, { FC } from "react";
import GoogleMapReact from "google-map-react";

import useMapComponent from "./use-map-component";

import { defaultMapProps } from "utils/constants/map";
import { ImapAuction } from "@features/auctions/types";

interface Props {
  auctions: ImapAuction[];
}

const MapComponent: FC<Props> = ({ auctions = [] }) => {
  const { getLatLng, mapRef, handleZoomChange, clustersList, zoom, center } =
    useMapComponent(auctions);

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "" }}
      defaultCenter={defaultMapProps.center}
      defaultZoom={defaultMapProps.zoom}
      zoom={zoom}
      center={center}
      onClick={getLatLng}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={(map) => (mapRef.current = map)}
      onChange={({ zoom, bounds }) => handleZoomChange(zoom, bounds)}
    >
      {clustersList}
    </GoogleMapReact>
  );
};

export default MapComponent;
