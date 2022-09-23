import { IsBoolean, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { User } from "modules/users/entities/user.entity";

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
  @MaxLength(16)
  public price: string;

  @IsString()
  @MaxLength(100)
  public location: string;

  @IsString()
  @MaxLength(12)
  public phoneNumber: string;

  @IsString()
  @MaxLength(50)
  public type: string;

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

  public owner: User
}
