import React, { FC } from "react";
import GoogleMapReact from "google-map-react";

import useMapComponent from "./use-map-component";

import { defaultMapProps } from "utils/constants/map";
import { Iauction } from "@features/auctions/types";

interface Props {
  auctions: Iauction[];
}

const MapComponent: FC<Props> = ({ auctions = [] }) => {
  const { getLatLng, mapRef, handleZoomChange, clustersList } = useMapComponent(auctions);

  return (
    <div style={{ height: "100vh", width: "95vw" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultMapProps.center}
        defaultZoom={defaultMapProps.zoom}
        onClick={getLatLng}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={(map) => (mapRef.current = map)}
        onChange={({ zoom, bounds }) => handleZoomChange(zoom, bounds)}
      >
        {clustersList}
      </GoogleMapReact>
    </div>
  );
};

export default MapComponent;
