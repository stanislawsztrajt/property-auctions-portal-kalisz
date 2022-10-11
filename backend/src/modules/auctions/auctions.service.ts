import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';
import { Auction } from './entities/auction.entity';


@Injectable()
export class AuctionsService {
  constructor(
    @InjectRepository(Auction)
    private readonly auctionRepository: Repository<Auction>
  ) {}

  findInRange(startRange: number, range: number, body: any) {
    let query = `
      SELECT auction.id, auction.slug, auction.title, auction.price, auction.type, auction."areaSize", auction."locationLat", auction."locationLng",
      json_build_object('username', public.user.username) as user
      FROM auction
      LEFT JOIN public.user
      ON auction."userId" = public.user.id
      `;

    const entries = Object.entries(body).filter(([key]) => key !== 'sort');
    entries.forEach(([key, value]: [any, any], index) => {
      // about cases https://www.figma.com/file/23sdQ1dBe2UEbyaC9w2ZoC/Untitled?node-id=0%3A1

      // case 3
      if (value.unit && value.since && value.to) {
        return query +=
          `${index === 0 ? ' WHERE' : ' AND '}
          (${key} ->> 'size')::float > ${value.since}
          AND (${key} ->> 'size')::float < ${value.to}
          AND (${key} ->> 'unit')::text = '${value.unit}'
        `;
      }

      // case 2
      if (value.since && value.to) {
        return query +=
          `${index === 0 ? ' WHERE ' : ' AND '}
          auction."${key}" > ${value.since}
          AND auction."${key}" < ${value.to}
        `;
      }

      // case 1
      query += `
        ${index === 0 ? ' WHERE' : ' AND'}
        auction."${key}" iLIKE '%${value}%'
      `;
    });

    // adding sorting by DESC | ASC and LIMIT
    query +=
    `${body?.sort
        ? `ORDER BY auction."${body.sort.name}" ${body.sort.by}`
        : 'ORDER BY auction.id DESC'
      }
      LIMIT ${range} OFFSET ${startRange}
    `;
    return this.auctionRepository.query(query);
  }

  findOneBySlug(slug: string) {
    return this.auctionRepository.findOne({
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
      SELECT auction.id, auction.slug, auction.title, auction.price, auction.type, auction."areaSize", auction."locationLat", auction."locationLng", json_build_object('username', public.user.username) as user
      FROM auction
      LEFT JOIN public.user
      ON auction."userId" = public.user.id
      GROUP BY auction.id, auction.slug, auction.title, auction.price, auction."locationLat",  auction."locationLng", public.user.username
      ORDER BY auction.id
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
