import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';
import { Auction } from './entities/auction.entity';

@Injectable()
export class AuctionsService {
  constructor(
    @InjectRepository(Auction) private readonly auctionRepository: Repository<Auction>,
  ) {}

  create(createAuctionDto: CreateAuctionDto) {
    console.log('LOGGER LOGGER LOGGER LOGGER')
    console.log(createAuctionDto)
    const newAuction = this.auctionRepository.create(createAuctionDto)
    console.log('LOGGER LOGGER LOGGER LOGGER')
    return this.auctionRepository.save(newAuction);
  }

  findAll() {
    return this.auctionRepository.find({ relations: { user: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} auction`;
  }

  update(id: number, updateAuctionDto: UpdateAuctionDto) {
    return `This action updates a #${id} auction`;
  }

  remove(id: number) {
    return `This action removes a #${id} auction`;
  }
}
