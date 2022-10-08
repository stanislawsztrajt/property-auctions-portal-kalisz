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
    <div className="flex flex-row items-center px-2 py-4 gap-x-4">
      <MapSearchInput />
      <MapSearchSort />
      <MapSearchFilters />
    </div>
  );
};

export default MapSearchOptions;
