import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'modules/auth/guards/jwt-auth.guard';
import { OwnerGuard } from 'modules/auth/guards/owner.guard';
import { AuctionsService } from './auctions.service';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';


@Controller('auctions')
export class AuctionsController {
  constructor(private readonly auctionsService: AuctionsService) {}


  @Get('in-range/:range/:startRange')
  findInRange(
    @Param('range') range: number,
    @Param('startRange') startRange: number
  ) {
    return this.auctionsService.findInRange(range, startRange);
  }

  @Get('user/:userId')
  findUserAuctions(@Param('userId') userId: number) {
    return this.auctionsService.findUserAuctions(userId);
  }

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(OwnerGuard)
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuctionDto: UpdateAuctionDto) {
    return this.auctionsService.update(+id, updateAuctionDto);
  }

  @UseGuards(OwnerGuard)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.auctionsService.remove(+id);
  }
}
