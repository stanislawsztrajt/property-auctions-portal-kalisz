import axios from 'axios'
import { authHeader } from 'utils/constants'

const url = `${process.env.NEXT_PUBLIC_API_URL}/saved-auctions`

export class SavedAuctionsServices {
  async getAll() {
    const { data } = await axios.get(`${url}`)
    return data
  }
  
  async getUser (userId: number) {
    const { data } = await axios.get(`${url}/user/${userId}`)
    return data
  }

  async getById(id: number) {
    const { data } = await axios.get(`${url}/${id}`)
    return data
  }

  async create (auctionId: string) {
    const { data } = await axios.post(`${url}`, { auctionId }, authHeader)
    return data
  }

  async remove (id: number) {
    const { data } = await axios.delete(`${url}/${id}`, authHeader)
    return data
  }
}

export default new SavedAuctionsServices