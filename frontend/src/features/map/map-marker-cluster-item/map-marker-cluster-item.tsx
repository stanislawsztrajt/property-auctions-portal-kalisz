import React, { FC } from "react";

interface Props {
  lat: number;
  lng: number;
  pointCount: number;
}

const MapMarkerClusterItem: FC<Props> = ({ pointCount }) => {
  return (
    <div className="flex items-center justify-center w-12 h-12 bg-red-500 rounded-full">
      {pointCount}
    </div>
  );
};

export default MapMarkerClusterItem;
