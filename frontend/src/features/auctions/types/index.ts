import { IsavedAuction } from "@features/saved-auctions/types";
import { Tcategory } from "utils/types";

export interface ImapAuction {
  id: number;
  slug: string;
  title: string;
  price: string;
  priceType?: string;
  locationLat: number;
  locationLng: number;
  areaSize: string;
  type: Tcategory;
  createdAt: Date;
  user: {
    username: string;
  };
}

export interface Iauction extends ImapAuction {
  description: string;
  location: string;
  phoneNumber: string;
  investment?: string;
  rooms?: number;
  level?: number;
  rent?: string;
  additions?: string;
  parkingSpace?: boolean;
  updatedAt: Date;
  savedAuctions?: IsavedAuction[];
}

export interface IinRangeBody extends Iauction {
  sort: {
    name: string;
    by: "ASC" | "DESC";
  };
}
