import { Test, TestingModule } from '@nestjs/testing';
import { SavedAuctionsController } from './saved-auctions.controller';
import { SavedAuctionsService } from './saved-auctions.service';

describe('SavedAuctionsController', () => {
  let controller: SavedAuctionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SavedAuctionsController],
      providers: [SavedAuctionsService],
    }).compile();

    controller = module.get<SavedAuctionsController>(SavedAuctionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
