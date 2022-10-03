import { Iauction, IinRangeBody } from "@features/auctions/types";
import axios from "axios";
import { authHeader } from "utils/constants";

const url = `${process.env.NEXT_PUBLIC_API_URL}/auctions`;

export class AuctionsServices {
  async getInRangeWithFilterAndSort(startRange: number, range: number, body?: IinRangeBody) {
    // body is auction entries with an additional sort object { sort: { name: string, by: "ASC" | "DESC" } }
    const { data } = await axios.post(`${url}/in-range/${startRange}/${range}`, body);
    return data;
  }

  async getAll() {
    const { data } = await axios.get(url);
    return data;
  }

  async getById(id: number) {
    const { data } = await axios.get(`${url}/${id}`);
    return data;
  }

  async create(auction: Iauction) {
    const { data } = await axios.post(`${url}`, auction, authHeader);
    return data;
  }

  async update(id: number, auction: Iauction) {
    const { data } = await axios.patch(`${url}/${id}`, auction, authHeader);
    return data;
  }

  async remove(id: number) {
    const { data } = await axios.delete(`${url}/${id}`, authHeader);
    return data;
  }
}

export default new AuctionsServices();
