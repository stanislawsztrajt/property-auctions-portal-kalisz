import { HttpException, HttpStatus } from '@nestjs/common';

export const parseJwt: (jwt: string) => string = (jwt) => {
  try {
    return jwt.split(' ')[1];
  } catch {
    throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
  }
};
