import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    return this.auctionRepository.findBy({ user: { id: userId } });
  }

  async create(createAuctionDto: CreateAuctionDto) {
    try {
      const newAuction = this.auctionRepository.create(createAuctionDto);
      return await this.auctionRepository.save(newAuction);
    } catch {
      throw new HttpException('Title or description already exist', HttpStatus.BAD_REQUEST)
    }
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

  async update(id: number, updateAuctionDto: UpdateAuctionDto) {
    try {
      return await this.auctionRepository.update(id, updateAuctionDto);
    } catch {
      throw new HttpException('Title or description already exist', HttpStatus.BAD_REQUEST)
    }
  }

  remove(id: number) {
    return this.auctionRepository.delete(id);
  }
}
