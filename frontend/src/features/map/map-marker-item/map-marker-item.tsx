import { Iauction } from "@features/auctions/types";
import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMapMarkerItem from "./use-map-marker-item";
import Image from "next/image";
import Link from "next/link";
import { defaultCurrency } from "utils/constants";

interface Props {
  $hover: boolean;
  auction: Iauction;
  lat: number;
  lng: number;
}

const MapMarkerItem: FC<Props> = ({ $hover, auction }) => {
  const { icon } = useMapMarkerItem(auction);

  return (
    <>
      {$hover ? (
        <div className="absolute z-10 flex flex-row p-4 overflow-hidden text-black bg-white rounded-lg w-72 bottom-2 left-3 ">
          <div className="flex items-center justify-center w-2/6 p-1">
            <Image
              loading="lazy"
              width={"120"}
              height={"120"}
              src="https://pbs.twimg.com/profile_images/1285655593592791040/HtwPZgej_400x400.jpg"
              alt="property image"
            />
          </div>
          <div className="flex flex-col justify-center w-4/6 ml-2 text-sm">
            <h3 className="font-medium">
              {auction.title.substring(0, 23)}
              {auction.title.length >= 23 ? "..." : null}
            </h3>
            <div className="font-medium text-green-600">
              <span className="text-lg">
                {auction.price} {defaultCurrency}
              </span>
            </div>
            <div className="text-base">{auction.user?.username}</div>
          </div>
        </div>
      ) : null}
      <Link href={`/auctions/${auction.slug}`}>
        <div
          className={`flex items-center relative bottom-2 right-7 justify-center w-10 h-10 text-base duration-100 rounded-full cursor-pointer hover:opacity-80 bg-${icon.color}`}
        >
          <FontAwesomeIcon icon={icon.name} />
        </div>
      </Link>
    </>
  );
};

export default MapMarkerItem;
