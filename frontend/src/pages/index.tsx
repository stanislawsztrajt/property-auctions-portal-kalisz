import React, { useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import { MapComponent } from "@features/map";
import MapSearchOptions from "@features/map/map-search-options";
import { ImapAuction } from "@features/auctions/types";
import { AuctionsServices } from "utils/api";
import { AuctionList } from "@features/auctions";

interface Props {
  auctions: ImapAuction[];
}

const Home: NextPage<Props> = ({ auctions: allAuctions }: Props) => {
  const [auctions, setAuctions] = useState(allAuctions);

  return (
    <div className="w-screen h-screen">
      <MapSearchOptions setAuctions={setAuctions} />
      <div className="w-3/4 h-3/4">
        <MapComponent auctions={auctions} />
      </div>
      <AuctionList auctions={auctions} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const auctions: ImapAuction[] = await AuctionsServices.getAll();

  return {
    props: {
      auctions,
    },
  };
};
