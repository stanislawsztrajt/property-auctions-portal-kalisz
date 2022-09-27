import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response, NextFunction } from 'express';
import { Auction } from 'modules/auctions/entities/auction.entity';
import { Irequest } from 'utils/types/api';
import slugify from 'slugify'

@Injectable()
export class SetSlugMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}

  async use(req: Irequest<Auction>, res: Response, next: NextFunction) {
    req.body.slug = slugify(req.body.title, '-')
    next();
  }
}
