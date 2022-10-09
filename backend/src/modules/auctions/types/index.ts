import { Auction } from '../entities/auction.entity';

export type Tcategory = 'dom' | 'mieszkanie' | 'działka' | 'inna';

export interface IinRangeBody extends Auction {
  sort?: {
    name: string;
    by: string;
  };
}

export type Tarea = {
  unit: string,
  size: number
}

export type Tlocation = {
  name: string,
  lat: number,
  lng: number
}