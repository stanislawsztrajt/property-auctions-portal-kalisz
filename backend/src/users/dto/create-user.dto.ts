import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @MaxLength(120)
  @MinLength(4)
  username: string;

  @IsNotEmpty()
  @MaxLength(2000)
  @MinLength(4)
  password: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(120)
  @MinLength(4)
  email: string;
}