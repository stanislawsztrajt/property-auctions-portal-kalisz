import { Props } from "./map-marker-cluster-item";

const useMapMarkerClusterItem = ({
  setCenter,
  setZoom,
  lng,
  lat,
  supercluster,
  clusterId,
}: Props) => {
  const zoomToCluster = () => {
    if (!supercluster) throw new Error("supercluster is undefined");

    const expansionZoom = Math.min(supercluster.getClusterExpansionZoom(clusterId), 20);
    setZoom(expansionZoom);
    setCenter({ lng, lat });
  };

  return {
    zoomToCluster,
  };
};

export default useMapMarkerClusterItem;
