import { Test, TestingModule } from '@nestjs/testing';
import { SavedAuctionsService } from './saved-auctions.service';

describe('SavedAuctionsService', () => {
  let service: SavedAuctionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SavedAuctionsService],
    }).compile();

    service = module.get<SavedAuctionsService>(SavedAuctionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
