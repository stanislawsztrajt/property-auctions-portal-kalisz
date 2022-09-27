import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AuctionsService } from './auctions.service';
import { AuctionsController } from './auctions.controller';
import { SetOwnerMiddleware } from 'core/middlewares/set-owner.middleware';
import { JwtService } from '@nestjs/jwt';
import { Auction } from './entities/auction.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SetSlugMiddleware } from './middlewares/set-slug.middleware';

@Module({
  imports: [
    TypeOrmModule.forFeature([Auction])
  ],
  controllers: [AuctionsController],
  providers: [AuctionsService, JwtService],
})
export class AuctionsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SetOwnerMiddleware)
      .forRoutes({ path: 'auctions', method: RequestMethod.POST })
      .apply(SetSlugMiddleware)
      .forRoutes({ path: 'auctions', method: RequestMethod.POST }, { path: 'auctions/:id', method: RequestMethod.PATCH });
  }
}
