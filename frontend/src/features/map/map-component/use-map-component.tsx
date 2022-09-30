import { Iauction } from "@features/auctions/types";
import googleMapReact from "google-map-react";
import { useRef, useState } from "react";
import useSupercluster from "use-supercluster";
import { defaultMapProps } from "utils/constants/map";
import MapMarkerClusterItem from "../map-marker-cluster-item";
import MapMarkerItem from "../map-marker-item";
import React from "react";

interface Ipoint {
  type: string;
  properties: any
  geometry: {
    type: string,
    coordinates: number[]
  };
}

const useMapComponent = (auctions: Iauction[]) => {
  const mapRef = useRef<any>();
  const [zoom, setZoom] = useState<number>(defaultMapProps.zoom);
  const [bounds, setBounds] = useState<number[] | null>(null);

  const points: Ipoint[] = auctions.map((auction) => ({
    type: "Feature",
    properties: {
      cluster: false,
      ...auction,
    },
    geometry: {
      type: "Point",
      coordinates: [auction.locationLng, auction.locationLat],
    },
  }));

  const { clusters }: { clusters: Ipoint[] } = useSupercluster({
    points,
    bounds,
    zoom,
    options: {
      radius: 75,
      maxZoom: 20,
    },
  });

  const handleZoomChange = (zoom: number, bounds: googleMapReact.Bounds) => {
    setZoom(zoom);
    setBounds([bounds.nw.lng, bounds.se.lat, bounds.se.lng, bounds.nw.lat]);
  };

  const clustersList = clusters.map((cluster) => {
    const {
      cluster: isCluster,
      point_count: pointCount,
      cluster_id: clusterId,
    } = cluster.properties;
    const {
      properties: auction,
      geometry: { coordinates },
    } = cluster;
    const lng: number = coordinates[0];
    const lat: number = coordinates[1];

    if (isCluster) {
      return <MapMarkerClusterItem key={clusterId} lng={lng} lat={lat} pointCount={pointCount} />;
    }

    return <MapMarkerItem key={auction.id} lng={lng} lat={lat} auction={auction} $hover />;
  });

  const getLatLng = (e: googleMapReact.ClickEventValue) => {
    console.log(e.lat, " : ", e.lng);
    return {
      lat: e.lat,
      lng: e.lng,
    };
  };

  return {
    getLatLng,
    mapRef,
    handleZoomChange,
    clustersList,
  };
};

export default useMapComponent;
