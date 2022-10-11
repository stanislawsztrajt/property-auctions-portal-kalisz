import React, { FC } from "react";
import useMapSearchSort from "./use-map-search-sort";

const MapSearchSort: FC = () => {
  const { selectedOption, setSelectedOption } = useMapSearchSort();

  return (
    <select
      value={selectedOption}
      onChange={(e) => setSelectedOption(e.target.value)}
      name="sortOptions"
      id="sortOptions"
      className="px-4 pb-1 mt-1 text-lg duration-100 border-b-2 outline-none focus:border-border-primary-focus"
    >
      <option defaultChecked value='{ "by": "DESC", "name": "createdAt" }'>
        Najnowsze
      </option>
      <option value='{ "by": "ASC", "name": "createdAt" }'>Najstarsze</option>
      <option value='{ "by": "DESC", "name": "price" }'>Najdroższe</option>
      <option value='{ "by": "ASC", "name": "price" }'>Najtańsze</option>
    </select>
  );
};

export default MapSearchSort;
