import { faCalendarDays, faChartArea, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { defaultCurrency } from "utils/constants";
import { parseDateFns } from "utils/helpers";
import { ImapAuction } from "../types";

interface Props {
  auction: ImapAuction;
}

const AuctionItem: FC<Props> = ({ auction }) => {
  return (
    <Link href={`/auctions/${auction.slug}`}>
      <div className="p-6 border-t cursor-pointer">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <Image
              loading="lazy"
              width={"100%"}
              height={"100%"}
              src="https://pbs.twimg.com/profile_images/1285655593592791040/HtwPZgej_400x400.jpg"
              alt="property image"
            />
            <div className="flex flex-col ml-4">
              <h2 className="text-2xl font-medium">{auction.title}</h2>
              <h3 className="">
                <FontAwesomeIcon className="mr-1" icon={faCalendarDays} />
                {parseDateFns(auction.createdAt)}
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-center">
            { auction.priceType ? (
              <div className="text-3xl text-text-secondary-strong">{auction.priceType}</div>
            ) : (
              <>
                <div className="text-3xl text-text-secondary-strong">{auction.price} {defaultCurrency}</div>
                <div className="flex gap-4 ">
                  <div className="text-xl">
                    <FontAwesomeIcon className="mr-1" icon={faChartArea} />
                    {auction.area.size} {auction.area.unit}
                  </div>
                  <div className="text-lg">
                    {~~(auction.price / auction.area.size)} {defaultCurrency}/{auction.area.unit}
                  </div>
                </div>
              </>
            ) }
            <div className="flex gap-4">
              <div className="text-sm">
                <FontAwesomeIcon className="mr-1" icon={faUser} />
                {auction.user.username}
              </div>
              <div className="text-sm">
                <FontAwesomeIcon className="mr-1" icon={faHouse} />
                {auction.type}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AuctionItem;
