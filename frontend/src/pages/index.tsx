import React, { useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import { MapComponent } from "@features/map";
import { ImapAuction } from "@features/auctions/types";
import { AuctionsServices } from "utils/api";
import { AuctionList } from "@features/auctions";
import { MainLayout } from "@features/ui";

interface Props {
  auctions: ImapAuction[];
}

const Home: NextPage<Props> = ({ auctions: allAuctions }: Props) => {
  const [auctions, setAuctions] = useState(allAuctions);

  return (
    <MainLayout setAuctions={setAuctions}>
      <AuctionList auctions={auctions} />
      <MapComponent auctions={auctions} />
    </MainLayout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const auctions: ImapAuction[] = await AuctionsServices.getAll();
  console.log(auctions)
  return {
    props: {
      auctions,
    },
  };
};
