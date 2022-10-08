import React, { FC } from "react";
import GoogleMapReact from "google-map-react";

import useMapComponent from "./use-map-component";

import { ImapAuction } from "@features/auctions/types";
import { defaultMapProps } from "utils/constants/map";

export interface Props {
  auctions: ImapAuction[];
  defaultZoom?: number;
  defaultCenter?: { lng: number, lat: number };
}

const MapComponent: FC<Props> = (props) => {
  const { getLatLng, mapRef, handleZoomChange, clustersList, zoom, center } =
    useMapComponent(props);

  return (
    <div className="w-1/2 h-full text-white">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        options={{
          minZoom: defaultMapProps.minZoom
        }}
        defaultCenter={props.defaultCenter ?? defaultMapProps.center}
        defaultZoom={props.defaultZoom ?? defaultMapProps.zoom}
        zoom={zoom}
        center={center}
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
