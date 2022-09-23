import { PartialType } from '@nestjs/mapped-types';
import { CreateSavedAuctionDto } from './create-saved-auction.dto';

export class UpdateSavedAuctionDto extends PartialType(CreateSavedAuctionDto) {}
