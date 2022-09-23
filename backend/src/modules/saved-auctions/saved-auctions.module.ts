import { Module } from '@nestjs/common';
import { SavedAuctionsService } from './saved-auctions.service';
import { SavedAuctionsController } from './saved-auctions.controller';

@Module({
  controllers: [SavedAuctionsController],
  providers: [SavedAuctionsService]
})
export class SavedAuctionsModule {}
