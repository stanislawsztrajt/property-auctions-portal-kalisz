import googleMapReact from "google-map-react";

const useMapComponent = () => {
  const getLatLng = (e: googleMapReact.ClickEventValue) => {
    console.log(e.lat, " : ", e.lng);
    return {
      lat: e.lat,
      lng: e.lng,
    };
  };

  return {
    getLatLng,
  };
};

export default useMapComponent;
