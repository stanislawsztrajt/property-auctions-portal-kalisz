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
    <div>
      <MapSearchInput />
      <MapSearchFilters />
      <MapSearchSort />
    </div>
  );
};

export default MapSearchOptions;
