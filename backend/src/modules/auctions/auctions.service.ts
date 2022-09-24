import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';
import { Auction } from './entities/auction.entity';
import { Tcategory } from './types';

@Injectable()
export class AuctionsService {
  constructor(
    @InjectRepository(Auction)
    private readonly auctionRepository: Repository<Auction>
  ) {}

  findByCategory(category: Tcategory) {
    return this.auctionRepository.find({
      where: { category },
      relations: { user: true },
    });
  }

  findInRange(range: number, startRange: number) {
    const query = `SELECT * FROM auction LIMIT ${range} OFFSET ${startRange}`;
    return this.auctionRepository.query(query);
  }

  findUserAuctions(userId: number) {
    return this.auctionRepository.findBy({ user: { id: userId } })
  }

  create(createAuctionDto: CreateAuctionDto) {
    const newAuction = this.auctionRepository.create(createAuctionDto);
    return this.auctionRepository.save(newAuction);
  }

  findAll() {
    return this.auctionRepository.find({ relations: { user: true } });
  }

  findOne(id: number) {
    return this.auctionRepository.findOne({
      where: { id },
      relations: { user: true },
    });
  }

  update(id: number, updateAuctionDto: UpdateAuctionDto) {
    return this.auctionRepository.update(id, updateAuctionDto);
  }

  remove(id: number) {
    return this.auctionRepository.delete(id);
  }
}
