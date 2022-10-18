import { Iauction, IinRangeBody, ImapAuction } from "@features/auctions/types";
import axios from "axios";
import { authHeader } from "utils/constants";

const url = `${process.env.NEXT_PUBLIC_API_URL}/auctions`;

export class AuctionsServices {
  async getInRangeWithFilterAndSort(
    startRange: number,
    range: number,
    body?: IinRangeBody
  ): Promise<ImapAuction[]> {
    // body is auction entries with an additional sort object { sort: { name: string, by: "ASC" | "DESC" } }
    const { data } = await axios.post(`${url}/in-range/${startRange}/${range}`, body);
    return data;
  }

  async getOneBySlug(slug: string): Promise<Iauction> {
    const { data } = await axios.get(`${url}/slug/${slug}`);
    return data;
  }

  async getAll(): Promise<ImapAuction[]> {
    const { data } = await axios.get(url);
    return data;
  }

  async getOneById(id: number): Promise<Iauction> {
    const { data } = await axios.get(`${url}/${id}`);
    return data;
  }

  async create(auction: Iauction): Promise<Iauction> {
    const { data } = await axios.post(`${url}`, auction, authHeader);
    return data;
  }

  async update(id: number, auction: Iauction): Promise<Iauction> {
    const { data } = await axios.patch(`${url}/${id}`, auction, authHeader);
    return data;
  }

  async remove(id: number): Promise<Iauction> {
    const { data } = await axios.delete(`${url}/${id}`, authHeader);
    return data;
  }
}

export default new AuctionsServices();
