import { ImapAuction } from "@features/auctions/types";
import React, { FC } from "react";
import { MapSearchInput, MapSearchFilters, MapSearchSort } from "../";
import useMapSearchOptions from "./use-map-search-options";

export interface Props {
  setAuctions: React.Dispatch<React.SetStateAction<ImapAuction[]>>;
}

const MapSearchOptions: FC<Props> = ({ setAuctions }) => {
  useMapSearchOptions({ setAuctions });
  return (
    <div className='flex flex-row items-center ml-4 h-1/2 gap-x-20'>
      <MapSearchInput />
      <MapSearchSort />
      <MapSearchFilters />
    </div>
  );
};

export default MapSearchOptions;
