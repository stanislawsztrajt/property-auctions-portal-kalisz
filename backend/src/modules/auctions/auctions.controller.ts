import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuctionsService } from './auctions.service';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';
import { Tcategory } from './types';

@Controller('auctions')
export class AuctionsController {
  constructor(private readonly auctionsService: AuctionsService) {}

  @Get('category/:category')
  findByCategory(@Param('category') category: Tcategory) {
    return this.auctionsService.findByCategory(category);
  }

  @Get('in-range/:range/:startRange')
  findInRange(
    @Param('range') range: number,
    @Param('startRange') startRange: number
  ) {
    return this.auctionsService.findInRange(range, startRange);
  }

  @Get('user/:userId')
  findUserAuctions(
    @Param('userId') userId: number
  ) {
    return this.auctionsService.findUserAuctions(userId);
  }

  @Post()
  create(@Body() createAuctionDto: CreateAuctionDto) {
    return this.auctionsService.create(createAuctionDto);
  }

  @Get()
  findAll() {
    return this.auctionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.auctionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuctionDto: UpdateAuctionDto) {
    return this.auctionsService.update(+id, updateAuctionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.auctionsService.remove(+id);
  }
}
