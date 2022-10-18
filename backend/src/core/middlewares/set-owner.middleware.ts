import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response, NextFunction } from 'express';
import { Auction } from 'modules/auctions/entities/auction.entity';
import { User } from 'modules/users/entities/user.entity';
import { parseJwt } from 'utils/helpers/jwt';
import { Irequest } from 'utils/types/api';

@Injectable()
export class SetOwnerMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}

  async use(req: Irequest<Auction>, res: Response, next: NextFunction) {
    const token = parseJwt(req.headers.authorization);
    const user: User = await this.jwtService.verify(token, {
      secret: process.env.JWT_SECRET,
    });
    req.body.user = user;
    next();
  }
}
