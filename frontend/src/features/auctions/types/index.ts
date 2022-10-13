import { IsavedAuction } from "@features/saved-auctions/types";
import { Tcategory } from "utils/types";

export type Tarea = {
  unit: string;
  size: number;
};

export type Tlocation = {
  name: string;
  lat: number;
  lng: number;
};

export interface ImapAuction {
  id: number;
  slug: string;
  title: string;
  price: number;
  priceType?: string;
  location: Tlocation;
  area: Tarea;
  type: Tcategory;
  createdAt: Date;
  user: {
    username: string;
  };
}

export interface Iauction extends ImapAuction {
  description: string;
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
