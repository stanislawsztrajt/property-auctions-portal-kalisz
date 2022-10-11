import googleMapReact from "google-map-react";
import { useRef, useState } from "react";
import useSupercluster from "use-supercluster";
import { defaultMapProps } from "utils/constants/map";
import MapMarkerClusterItem from "../map-marker-cluster-item";
import MapMarkerItem from "../map-marker-item";
import React from "react";
import { BBox } from "geojson";
import { AnyProps, PointFeature } from "supercluster";
import { Ilocation } from "../types";
import { Props } from "./map-component";

const useMapComponent = ({ auctions, defaultZoom, defaultCenter }: Props) => {
  const mapRef = useRef<{ map: unknown; maps: unknown; ref: Element | null }>();
  const [zoom, setZoom] = useState<number>(defaultZoom ?? defaultMapProps.zoom);
  const [center, setCenter] = useState<Ilocation>(defaultCenter ?? defaultMapProps.center);
  const [bounds, setBounds] = useState<BBox | undefined>(undefined);

  const points: PointFeature<AnyProps>[] = auctions.map((auction) => ({
    type: "Feature",
    properties: {
      cluster: false,
      auction,
    },
    geometry: {
      type: "Point",
      coordinates: [auction.location.lng, auction.location.lat],
    },
  }));

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: {
      radius: 100,
      maxZoom: 20,
    },
  });

  const handleZoomChange = (zoom: number, bounds: googleMapReact.Bounds) => {
    setZoom(zoom);
    setBounds([bounds.nw.lng, bounds.se.lat, bounds.se.lng, bounds.nw.lat]);
  };

  const getLatLng = (e: googleMapReact.ClickEventValue) => {
    console.log(e.lat, " : ", e.lng);
    return {
      lat: e.lat,
      lng: e.lng,
    };
  };

  const clustersList = clusters.map((cluster) => {
    const {
      cluster: isCluster,
      point_count: pointCount,
      cluster_id: clusterId,
    } = cluster.properties;
    const {
      properties: { auction },
      geometry: { coordinates },
    } = cluster;
    const lng: number = coordinates[0];
    const lat: number = coordinates[1];

    if (isCluster) {
      return (
        <MapMarkerClusterItem
          key={clusterId}
          clusterId={clusterId}
          supercluster={supercluster}
          setZoom={setZoom}
          setCenter={setCenter}
          lng={lng}
          lat={lat}
          pointCount={pointCount}
        />
      );
    }

    return <MapMarkerItem key={auction.id} lng={lng} lat={lat} auction={auction} $hover />;
  });

  return {
    zoom,
    center,
    setZoom,
    setCenter,
    getLatLng,
    mapRef,
    handleZoomChange,
    clustersList,
  };
};

export default useMapComponent;
