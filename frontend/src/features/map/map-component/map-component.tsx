import React, { FC } from "react";
import GoogleMapReact from "google-map-react";
import MapMarkerItem from "../map-marker-item/map-marker-item";
import { Iauction } from "@features/auctions/types";
import useMapComponent from "./use-map-component";

const defaultProps = {
  center: {
    lat: 51.7666636,
    lng: 18.083333,
  },
  zoom: 13,
};

interface Props {
  auctions: Iauction[];
}

const MapComponent: FC<Props> = ({ auctions = [] }) => {
  const { getLatLng } = useMapComponent();

  const auctionsList = auctions.map((auction) => {
    return (
      <MapMarkerItem
        key={auction.id}
        lat={auction.locationLat}
        lng={auction.locationLng}
        auction={auction}
        $hover
      />
    );
  });

  return (
    <div style={{ height: "100vh", width: "95vw" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onClick={getLatLng}
      >
        {auctionsList}
      </GoogleMapReact>
    </div>
  );
};

export default MapComponent;
