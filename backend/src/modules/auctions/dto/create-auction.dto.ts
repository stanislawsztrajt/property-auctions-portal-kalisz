import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { User } from 'modules/users/entities/user.entity';
import { maxLat, maxLng, minLat, minLng } from 'utils/constants';
import { Tcategory } from '../types';

export class LocationDto {
  @IsString()
  @MaxLength(100)
  public name: string

  @IsNumber()
  @Min(minLat)
  @Max(maxLat)
  public lat: number;

  @IsNumber()
  @Min(minLng)
  @Max(maxLng)
  public lng: number;
}

export class AreaDto {
  @IsNumber()
  @Max(2147483647)
  public size: number;

  @IsString()
  @MaxLength(5)
  public unit: string;
}

export class CreateAuctionDto {
  @IsString()
  @MaxLength(200)
  @MinLength(8)
  public title: string;

  @IsString()
  @MaxLength(200)
  @MinLength(8)
  public description: string;

  @IsNumber()
  @Max(2147483647)
  public price: number;

  @IsOptional()
  @IsString()
  @MaxLength(16)
  public priceType: string;

  public location: LocationDto;

  @IsOptional()
  @IsString()
  @MaxLength(12)
  public phoneNumber: string;

  @IsString()
  @MaxLength(50)
  public type: Tcategory;

  public area: AreaDto;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  public investment: string;

  @IsOptional()
  @MaxLength(12)
  public rooms: number;

  @IsOptional()
  @IsString()
  @MaxLength(12)
  public level: number;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  public rent: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  public additions: string;

  @IsOptional()
  @IsBoolean()
  public parkingSpace: boolean;

  public user: User;
}
