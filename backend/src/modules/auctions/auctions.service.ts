import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';
import { Auction } from './entities/auction.entity';
import { IinRangeBody } from './types';

@Injectable()
export class AuctionsService {
  constructor(
    @InjectRepository(Auction)
    private readonly auctionRepository: Repository<Auction>
  ) {}

  findInRange(startRange: number, range: number, body: IinRangeBody) {
    let query = `
      SELECT auction.id, auction.slug, auction.title, auction.price, auction.type, auction."priceType", auction."createdAt", auction."areaSize", auction."locationLat", auction."locationLng",
      json_build_object('username', public.user.username) as user
      FROM auction
      LEFT JOIN public.user
      ON auction."userId" = public.user.id
      `;

    const entries = Object.entries(body).filter(([key]) => key !== 'sort');
    entries.forEach(([key, value], index) => {
      query += `${
        index === 0 ? ' WHERE' : ' AND'
      } auction."${key}" iLIKE '%${value}%' `;
    });

    query += `${
      body?.sort
        ? `ORDER BY auction."${body.sort.name}" ${body.sort.by}`
        : 'ORDER BY auction.id DESC'
    }
    LIMIT ${range} OFFSET ${startRange}`;

    return this.auctionRepository.query(query);
  }

  findOneBySlug(slug: string) {
    console.log(slug)
    return this.auctionRepository.findOne({
      where: { slug },
      relations: { user: true },
    });
  }

  findBySlug(slug: string) {
    return this.auctionRepository.find({
      where: { slug },
      relations: { user: true },
    });
  }

  async create(createAuctionDto: CreateAuctionDto) {
    try {
      const newAuction = this.auctionRepository.create(createAuctionDto);
      return await this.auctionRepository.save(newAuction);
    } catch {
      throw new HttpException(
        'Title or description already exist',
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async findAll() {
    const query = `
      SELECT auction.id, auction.slug, auction.title, auction.price, auction."priceType", auction.type, auction."createdAt", auction."areaSize", auction."locationLat", auction."locationLng", json_build_object('username', public.user.username) as user
      FROM auction
      LEFT JOIN public.user
      ON auction."userId" = public.user.id
      ORDER BY auction.id DESC
    `;
    return await this.auctionRepository.query(query);
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
      throw new HttpException(
        'Title or description already exist',
        HttpStatus.BAD_REQUEST
      );
    }
  }

  remove(id: number) {
    return this.auctionRepository.delete(id);
  }
}
