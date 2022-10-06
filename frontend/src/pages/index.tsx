import React, { useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import { MapComponent } from "@features/map";
import MapSearchOptions from "@features/map/map-search-options";
import { ImapAuction } from "@features/auctions/types";
import { AuctionsServices } from "utils/api";
import { AuctionList } from "@features/auctions";
import { Header } from "@features/ui";

interface Props {
  auctions: ImapAuction[];
}

const Home: NextPage<Props> = ({ auctions: allAuctions }: Props) => {
  const [auctions, setAuctions] = useState(allAuctions);

  return (
    <main className="h-screen overflow-y-hidden">
      <section className='h-1/6'>
        <Header />
        <MapSearchOptions setAuctions={setAuctions} />
      </section>
      <section className='flex flex-row h-5/6'>
        <AuctionList auctions={auctions} />
        <MapComponent auctions={auctions} />
      </section>
    </main>
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
