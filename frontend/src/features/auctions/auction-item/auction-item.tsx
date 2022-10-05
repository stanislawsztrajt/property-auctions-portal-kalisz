import React, { FC } from "react";
import { ImapAuction } from "../types";

interface Props {
  auction: ImapAuction;
}

const AuctionItem: FC<Props> = ({ auction }) => {
  return (
    <div>
      <h2>{auction.title}</h2>
      <h2>{auction.id}</h2>
      <div>{auction.price}</div>
      <div>{auction.areaSize}</div>
      <div>{auction.user.username}</div>
      <div>{auction.type}</div>
    </div>
  );
};

export default AuctionItem;
