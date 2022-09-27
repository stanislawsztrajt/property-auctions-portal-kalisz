import { IsavedAuction } from "@features/saved-auctions/types";
import { Iuser } from "@features/users/types";
import { Tcategory } from "utils/types";

export interface Iauction {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: Tcategory;
  price: string;
  location: string;
  locationLat: number;
  locationLng: number;
  phoneNumber: string;
  type: string;
  areaSize: string;
  investment?: string;
  rooms?: number;
  level?: number;
  rent?: string;
  additions?: string;
  parkingSpace?: boolean;
  createdAt: Date;
  updatedAt: Date;
  user?: Iuser;
  savedAuctions?: IsavedAuction[];
}
