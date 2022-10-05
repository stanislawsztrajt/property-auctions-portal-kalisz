import React, { FC } from "react";
import useMapSearchInput from "./use-map-search-input";

const MapSearchInput: FC = () => {
  const { value, setValue } = useMapSearchInput();

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search"
      />
    </>
  );
};

export default MapSearchInput;
