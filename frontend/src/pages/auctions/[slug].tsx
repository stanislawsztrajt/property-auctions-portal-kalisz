import { Iauction, ImapAuction } from "@features/auctions/types";
import { MapComponent } from "@features/map";
import { MainLayout } from "@features/ui";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AuctionsServices } from "utils/api";
import { defaultCurrency } from "utils/constants";
import { auctionZoom } from "utils/constants/map";
import { parseDateFns } from "utils/helpers";

interface Props {
  auction: Iauction;
}

const AuctionPage: NextPage<Props> = ({ auction }: Props) => {
  const router = useRouter();

  const [auctions, setAuctions] = useState([auction as ImapAuction]);

  return (
    <MainLayout setAuctions={setAuctions}>
      <div className="flex flex-col w-1/2 gap-4 p-4 overflow-scroll overflow-x-hidden">
        <button className="text-left" onClick={() => router.back()}>
          Back to previous page
        </button>
        <Image
          loading="lazy"
          width={"200%"}
          height={"200%"}
          src="https://pbs.twimg.com/profile_images/1285655593592791040/HtwPZgej_400x400.jpg"
          alt="property image"
        />
        <h2 className="text-4xl text-center">
          {auction.title}
          <div className="-mt-1 text-lg">{auction.user.username}</div>
        </h2>
        <div className="flex justify-evenly">
          <div>{auction.location.name}</div>
          <div>
            {auction.price} {defaultCurrency}
            {auction.priceType}
          </div>
          <div>
            {auction.area.size} {auction.area.unit}
          </div>
          <div>{parseDateFns(auction.createdAt)}</div>
          <div>{auction.type}</div>
        </div>

        <h3 className="mt-8 text-3xl">Opis</h3>
        <div className="ml-8">{auction.description}</div>

        {auction.additions ? (
          <>
            <h3 className="text-2xl">Dodatkowe informacje</h3>
            <div>{auction?.additions}</div>
            <div>{auction?.investment}</div>
            <div>{auction?.level}</div>
            <div>{auction?.parkingSpace}</div>
            <div>{auction?.rent}</div>
            <div>{auction?.rooms}</div>
          </>
        ) : null}
      </div>

      <MapComponent
        auctions={auctions}
        defaultZoom={auctionZoom}
        defaultCenter={{ lng: auction.location.lng, lat: auction.location.lat }}
      />
    </MainLayout>
  );
};

export default AuctionPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const auctions = await AuctionsServices.getAll();
  const paths = auctions.map((auction) => {
    return {
      params: { slug: auction.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const auction = await AuctionsServices.getOneBySlug(params?.slug as string);

  return {
    props: {
      auction,
    },
  };
};
