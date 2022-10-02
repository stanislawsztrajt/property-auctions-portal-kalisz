import { Auction } from '../entities/auction.entity';

export type Tcategory = 'dom' | 'mieszkanie' | 'działka' | 'inna';

export interface IinRangeBody extends Auction {
  sort: {
    name: string;
    by: string;
  };
}
