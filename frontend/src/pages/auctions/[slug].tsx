import { Iauction, ImapAuction } from '@features/auctions/types';
import { MapComponent } from '@features/map';
import { MainLayout } from '@features/ui';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { AuctionsServices } from 'utils/api';
import { auctionZoom } from 'utils/constants/map';
import { parseDateFns } from 'utils/helpers';

interface Props {
  auction: Iauction
}

const AuctionPage: NextPage<Props> = ({ auction }: Props) => {
  const router = useRouter()

  const [auctions, setAuctions] = useState([auction as ImapAuction]);

  return (
    <MainLayout setAuctions={setAuctions}>
      <div className="w-1/2 overflow-scroll overflow-x-hidden">
        <button onClick={() => router.back()}>
          Back to previous page
        </button>
        <Image
          loading="lazy"
          width={"100%"}
          height={"100%"}
          src="https://pbs.twimg.com/profile_images/1285655593592791040/HtwPZgej_400x400.jpg"
          alt="property image"
        />
        <div>
          {auction.title}
        </div>
        <div>
          {auction.location}
        </div>
        <div>
          {auction.price}
          {auction.priceType}
        </div>
        <div>
          {auction.areaSize}
        </div>
        <div>
          {auction.user.username}
        </div>
        <div>
          {parseDateFns(auction.createdAt)}
        </div>
        <div>
          {auction.type}
        </div>
        <div>
          {auction?.additions}
        </div>
        <div>
          {auction?.investment}
        </div>
        <div>
          {auction?.level}
        </div>
        <div>
          {auction?.parkingSpace}
        </div>
        <div>
          {auction?.rent}
        </div>
        <div>
          {auction?.rooms}
        </div>
      </div>
      <MapComponent auctions={auctions} defaultZoom={auctionZoom} defaultCenter={{ lng: auction.locationLng, lat: auction.locationLat }} />
    </MainLayout>
  )
}

export default AuctionPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const auctions = await AuctionsServices.getAll()
  const paths = auctions.map(auction => {
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
  const auction = await AuctionsServices.getOneBySlug(params?.slug as string)

  return {
    props: {
      auction
    },
  };
};
