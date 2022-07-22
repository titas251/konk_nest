import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from '../User/User.service';
import { CreateUserDTO } from './dtos/CreateUser.dto';

@Controller('users')
export class UserController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() createUserDTO: CreateUserDTO) {
    return this.usersService.createUser(createUserDTO);
  }
}
