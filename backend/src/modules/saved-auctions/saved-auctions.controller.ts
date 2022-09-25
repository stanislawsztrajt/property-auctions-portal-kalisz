import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SavedAuctionsService } from './saved-auctions.service';
import { CreateSavedAuctionDto } from './dto/create-saved-auction.dto';
import { OwnerGuard } from 'modules/auth/guards/owner.guard';
import { JwtAuthGuard } from 'modules/auth/guards/jwt-auth.guard';

@Controller('saved-auctions')
export class SavedAuctionsController {
  constructor(private readonly savedAuctionsService: SavedAuctionsService) {}

  @Get('user/:userId')
  findUserSavedAuctions(@Param('userId') userId: number) {
    return this.savedAuctionsService.findUserSavedAuctions(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createSavedAuctionDto: CreateSavedAuctionDto) {
    return this.savedAuctionsService.create(createSavedAuctionDto);
  }

  @Get()
  findAll() {
    return this.savedAuctionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.savedAuctionsService.findOne(+id);
  }

  @UseGuards(OwnerGuard)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.savedAuctionsService.remove(+id);
  }
}
