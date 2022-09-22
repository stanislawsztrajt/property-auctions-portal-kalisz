import { bcryptRounds } from "utils/constants/bcrypt"
import * as bcrypt from 'bcrypt'

type ThashPassword = (password: string) => Promise<string>
export const hashPassword: ThashPassword = async (password) => {
  return await bcrypt.hash(password, bcryptRounds)
}

type TisPasswordMatch = (password: string, hashedPassword: string) => Promise<boolean>
export const isPasswordMatch: TisPasswordMatch = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword)
}