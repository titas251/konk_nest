import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './User.entity';
import { CreateUserDTO } from './dtos/CreateUser.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  public async findUserById(id: string) {
    try {
      return await this.userRepository.findOneByOrFail({ id });
    } catch {
      throw new NotFoundException(`User with id '${id}' not found`);
    }
  }

  public async findUserByUsername(username: string) {
    try {
      return await this.userRepository.findOneByOrFail({ username: username });
    } catch {
      throw new NotFoundException(`User '${username}' not found`);
    }
  }

  public createUser(createUserDTO: CreateUserDTO) {
    const user = this.userRepository.create(createUserDTO);

    return this.userRepository.save(user);
  }
}
