import { Iauction } from "@features/auctions/types";
import { Iuser } from "@features/users/types";

export interface IsavedAuction {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  auction?: Iauction;
  user?: Iuser;
}
