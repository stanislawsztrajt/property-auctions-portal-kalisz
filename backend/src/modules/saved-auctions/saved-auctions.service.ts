import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Auction } from 'modules/auctions/entities/auction.entity';
import { Repository } from 'typeorm';
import { CreateSavedAuctionDto } from './dto/create-saved-auction.dto';
import { UpdateSavedAuctionDto } from './dto/update-saved-auction.dto';
import { SavedAuction } from './entities/saved-auction.entity';

@Injectable()
export class SavedAuctionsService {
  constructor(
    @InjectRepository(SavedAuction)
    private readonly savedAuctionRepository: Repository<SavedAuction>,
    @InjectRepository(Auction)
    private readonly auctionRepository: Repository<Auction>
  ) {}

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
    return this.savedAuctionRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} savedAuction`;
  }

  update(id: number, updateSavedAuctionDto: UpdateSavedAuctionDto) {
    return `This action updates a #${id} savedAuction`;
  }

  remove(id: number) {
    return `This action removes a #${id} savedAuction`;
  }
}
