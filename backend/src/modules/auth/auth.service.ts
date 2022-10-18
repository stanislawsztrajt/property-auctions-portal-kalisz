import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'modules/users/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { isPasswordMatch } from 'utils/helpers/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private jwtService: JwtService
  ) {}

  async validateUser({ identifier, password }: LoginDto) {
    const findUserByIdentifierQuery = `SELECT * FROM public."user" WHERE email='${identifier}' OR username='${identifier}' LIMIT 1`;
    const user: User[] = await this.userRepository.query(
      findUserByIdentifierQuery
    );

    if (user[0] && (await isPasswordMatch(password, user[0].password))) {
      const { password, ...result } = user[0];
      return result;
    }
    return null;
  }

  async login({ identifier, password }: LoginDto) {
    const user = await this.validateUser({ identifier, password });

    if (!user) {
      throw new HttpException(
        'Useranme/Email and/or password is/are incorrect',
        HttpStatus.UNAUTHORIZED
      );
    }

    return {
      jwt: this.jwtService.sign(user),
      user,
    };
  }
}
