import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Role } from './types/roles';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    newUser.roles = [Role.USER];
    return this.userRepository.save(newUser);
  }

  findAll() {
    return this.userRepository.find({ relations: { auctions: true } });
  }

  findOne(id: number) {
    return this.userRepository.findBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
