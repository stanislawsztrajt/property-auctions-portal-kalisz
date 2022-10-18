import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';
import { Auction } from './entities/auction.entity';

const isQueryHasCondition = (query: string) => {
  return query.includes('WHERE') ? ' AND ' : ' WHERE ';
};

@Injectable()
export class AuctionsService {
  constructor(
    @InjectRepository(Auction)
    private readonly auctionRepository: Repository<Auction>
  ) {}

  findInRange(startRange: number, range: number, body: any) {
    let query = `
      SELECT auction.id, auction.slug, auction.title, auction.price, auction.type, auction."priceType", auction."createdAt", auction.area, auction.location,
      json_build_object('username', public.user.username) as user
      FROM auction
      LEFT JOIN public.user
      ON auction."userId" = public.user.id
      `;

    const entries = Object.entries(body).filter(([key]) => key !== 'sort');
    entries.forEach(([key, value]: [any, any]) => {
      // case 2, 3
      if (typeof value === 'object') {
        Object.entries(value).forEach((entry) => {
          // is value is empty
          if (entry[1] === '') return;

          switch (entry[0]) {
            case 'from': {
              if (key === 'area') {
                return (query += `
                  ${isQueryHasCondition(query)}
                  (${key} ->> 'size')::float >= ${value.from}
                `);
              }
              query += `
                ${isQueryHasCondition(query)}
                auction."${key}" >= ${value.from}
              `;
              break;
            }
            case 'to': {
              if (key === 'area') {
                return (query += `
                  ${isQueryHasCondition(query)}
                  (${key} ->> 'size')::float <= ${value.to}
                `);
              }
              query += `
                ${isQueryHasCondition(query)}
                auction."${key}" <= ${value.to}
              `;

              break;
            }
            case 'unit': {
              query += `
                ${isQueryHasCondition(query)}
                (${key} ->> 'unit')::text = '${value.unit}'
              `;

              break;
            }
            default: {
              throw new HttpException(
                'Object key is wrong',
                HttpStatus.BAD_REQUEST
              );
            }
          }
        });
      }

      // case with false or true
      else if (typeof value === 'boolean') {
        return (query += `${isQueryHasCondition(query)}
          auction."${key}" = ${value}
        `);
      }

      // case 1
      else {
        query += `
          ${isQueryHasCondition(query)}
          auction."${key}" iLIKE '%${value}%'
        `;
      }
    });

    // adding sorting by DESC | ASC and LIMIT
    query += `${
      body?.sort
        ? `ORDER BY auction."${body.sort.name}" ${body.sort.by}`
        : 'ORDER BY auction.id DESC'
    }
      LIMIT ${range} OFFSET ${startRange}
    `;

    console.log(query);
    return this.auctionRepository.query(query);
  }

  findOneBySlug(slug: string) {
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
      SELECT auction.id, auction.slug, auction.title, auction.price, auction.type, auction."priceType", auction."createdAt", auction.area, auction.location, 
      json_build_object('username', public.user.username) as user
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
