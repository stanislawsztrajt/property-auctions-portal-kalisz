import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SavedAuctionsService } from './saved-auctions.service';
import { CreateSavedAuctionDto } from './dto/create-saved-auction.dto';
import { UpdateSavedAuctionDto } from './dto/update-saved-auction.dto';

@Controller('saved-auctions')
export class SavedAuctionsController {
  constructor(private readonly savedAuctionsService: SavedAuctionsService) {}

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

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSavedAuctionDto: UpdateSavedAuctionDto
  ) {
    return this.savedAuctionsService.update(+id, updateSavedAuctionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.savedAuctionsService.remove(+id);
  }
}
