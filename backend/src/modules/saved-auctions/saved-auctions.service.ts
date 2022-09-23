import { Injectable } from '@nestjs/common';
import { CreateSavedAuctionDto } from './dto/create-saved-auction.dto';
import { UpdateSavedAuctionDto } from './dto/update-saved-auction.dto';

@Injectable()
export class SavedAuctionsService {
  create(createSavedAuctionDto: CreateSavedAuctionDto) {
    return 'This action adds a new savedAuction';
  }

  findAll() {
    return `This action returns all savedAuctions`;
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
