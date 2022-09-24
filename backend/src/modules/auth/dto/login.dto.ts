import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @MaxLength(2000)
  @MinLength(4)
  password: string;

  @IsNotEmpty()
  @MaxLength(120)
  @MinLength(4)
  identifier: string;
}
