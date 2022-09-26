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

export class CreateAuctionDto {
  @IsString()
  @MaxLength(200)
  @MinLength(8)
  public title: string;

  @IsString()
  @MaxLength(200)
  @MinLength(8)
  public description: string;

  @IsString()
  @MaxLength(30)
  public category: Tcategory;

  @IsString()
  @MaxLength(16)
  public price: string;

  @IsString()
  @MaxLength(100)
  public location: string;

  @IsNumber()
  @Min(minLat)
  @Max(maxLat)
  public locationLat: number;

  @IsNumber()
  @Min(minLng)
  @Max(maxLng)
  public locationLng: number;

  @IsString()
  @MaxLength(12)
  public phoneNumber: string;

  @IsString()
  @MaxLength(50)
  public type: Tcategory;

  @IsString()
  @MaxLength(20)
  public areaSize: string;

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
