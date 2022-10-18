import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { SavedAuctionsService } from './saved-auctions.service';
import { SavedAuctionsController } from './saved-auctions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SavedAuction } from './entities/saved-auction.entity';
import { Auction } from 'modules/auctions/entities/auction.entity';
import { SetOwnerMiddleware } from 'core/middlewares/set-owner.middleware';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([SavedAuction, Auction])],
  controllers: [SavedAuctionsController],
  providers: [SavedAuctionsService, JwtService],
})
export class SavedAuctionsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SetOwnerMiddleware)
      .forRoutes({ path: 'saved-auctions', method: RequestMethod.POST });
  }
}
