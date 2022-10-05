import React, { FC } from "react";
import AuctionItem from "../auction-item";
import { ImapAuction } from "../types";

interface Props {
  auctions: ImapAuction[];
}

const AuctionList: FC<Props> = ({ auctions }) => {
  const auctionsList = auctions.map((auction) => {
    return <AuctionItem key={auction.id} auction={auction} />;
  });

  return <section className="">{auctionsList}</section>;
};

export default AuctionList;
