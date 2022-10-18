import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { Auction } from 'modules/auctions/entities/auction.entity';
import { Irequest } from 'utils/types/api';
import slugify from 'slugify';

@Injectable()
export class SetSlugMiddleware implements NestMiddleware {
  async use(req: Irequest<Auction>, res: Response, next: NextFunction) {
    req.body.slug = slugify(req.body.title, '-');
    next();
  }
}
