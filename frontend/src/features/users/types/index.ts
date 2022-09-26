import { Iauction } from "@features/auctions/types";
import { IsavedAuction } from "@features/saved-auctions/types";

export interface Iuser {
  id: number;
  username: string;
  email: string;
  roles: string[];
  createdAt: Date;
  updatedAt: Date;
  auctions?: Iauction[];
  savedAuctions?: IsavedAuction[];
}
