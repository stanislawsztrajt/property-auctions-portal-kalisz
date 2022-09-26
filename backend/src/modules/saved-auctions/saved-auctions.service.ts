import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Auction } from 'modules/auctions/entities/auction.entity';
import { Repository } from 'typeorm';
import { CreateSavedAuctionDto } from './dto/create-saved-auction.dto';
import { SavedAuction } from './entities/saved-auction.entity';

@Injectable()
export class SavedAuctionsService {
  constructor(
    @InjectRepository(SavedAuction)
    private readonly savedAuctionRepository: Repository<SavedAuction>,
    @InjectRepository(Auction)
    private readonly auctionRepository: Repository<Auction>
  ) {}

  findUserSavedAuctions(userId: number) {
    return this.savedAuctionRepository.find({
      where: { user: { id: userId } },
      relations: { auction: true },
    });
  }

  async create(createSavedAuctionDto: CreateSavedAuctionDto) {
    const auction = await this.auctionRepository.findOneBy({
      id: createSavedAuctionDto.auctionId,
    });

    const savedAuction = this.savedAuctionRepository.create({
      ...createSavedAuctionDto,
      auction,
    });

    return this.savedAuctionRepository.save(savedAuction);
  }

  findAll() {
    return this.savedAuctionRepository.find({
      relations: { auction: true, user: true },
    });
  }

  findOne(id: number) {
    return this.savedAuctionRepository.findBy({ id });
  }

  remove(id: number) {
    return this.savedAuctionRepository.delete(id);
  }
}
