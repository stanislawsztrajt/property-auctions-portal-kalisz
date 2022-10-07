import React, { FC } from "react";
import useMapSearchInput from "./use-map-search-input";

const MapSearchInput: FC = () => {
  const { value, setValue } = useMapSearchInput();

  return (
    <input
      type="text"
      className="px-2 text-lg duration-100 border-b-2 outline-none w-96 focus:border-border-primary-focus"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Mieszkanie z 10 oknami..."
    />
  );
};

export default MapSearchInput;
