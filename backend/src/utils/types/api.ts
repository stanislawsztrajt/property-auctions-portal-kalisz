import { Request } from 'express';

export interface Irequest<T> extends Request {
  body: T;
  token?: string;
}
