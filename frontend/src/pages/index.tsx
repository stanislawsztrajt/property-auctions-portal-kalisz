import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import MapComponent from "@map/map-component";
import { Iauction } from "@features/auctions/types";
import AuctionsServices from "utils/api/auctions-services";

interface Props {
  auctions: Iauction[];
}

const Home: NextPage<Props> = ({ auctions }: Props) => {
  return (
    <div>
      <MapComponent auctions={auctions} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const auctions = await AuctionsServices.getAll();

  return {
    props: {
      auctions,
    },
  };
};
