import React, { Dispatch, FC } from "react";
import Supercluster, { AnyProps } from "supercluster";
import { Ilocation } from "../types";
import useMapMarkerClusterItem from "./use-map-marker-cluster-item";

export interface Props {
  lat: number;
  lng: number;
  pointCount: number;
  setZoom: Dispatch<React.SetStateAction<number>>;
  setCenter: Dispatch<React.SetStateAction<Ilocation>>;
  supercluster: Supercluster<AnyProps, AnyProps> | undefined;
  clusterId: number;
}

const MapMarkerClusterItem: FC<Props> = (props) => {
  const { zoomToCluster } = useMapMarkerClusterItem(props);

  return (
    <div
      onClick={zoomToCluster}
      className={`flex items-center justify-center font-medium text-lg bg-red-600 rounded-full h-12 w-12`}
    >
      {props.pointCount}
    </div>
  );
};

export default MapMarkerClusterItem;
