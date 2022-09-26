import { loginDto } from '@features/auth/types'
import axios from 'axios'

const url = `${process.env.NEXT_PUBLIC_API_URL}/auth`

export class AuthServices {
  async login (loginDto: loginDto) {
    const { data } = await axios.post(`${url}/login`, loginDto)
    return data
  }
}

export default new AuthServices