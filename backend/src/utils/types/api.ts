import { Request } from "express";

export interface Irequest<T> extends Request {
  data: T;
  jwt?: string;
}