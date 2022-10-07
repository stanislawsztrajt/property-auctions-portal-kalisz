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

  return (
    <section className="w-1/2 h-full overflow-scroll overflow-x-hidden">
      {auctions.length > 0 ? (
        auctionsList
      ) : (
        <div className="text-center">Nie znaleziono żadnych aukcji</div>
      )}
    </section>
  );
};

export default AuctionList;
