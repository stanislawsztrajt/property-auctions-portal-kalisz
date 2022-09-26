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

  async create(createUserDto: CreateUserDto) {
    try {
      const newUser = this.userRepository.create(createUserDto);
      newUser.roles = [Role.USER];
      return await this.userRepository.save(newUser);
    } catch {
      throw new HttpException('Username or Email already exist', HttpStatus.BAD_REQUEST)
    }
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.find({ where: { id }, relations: { auctions: true } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      return await this.userRepository.update(id, updateUserDto);
    } catch {
      throw new HttpException('Username or Email already exist', HttpStatus.BAD_REQUEST)
    }
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
