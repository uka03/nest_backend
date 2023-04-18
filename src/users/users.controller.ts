import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/user.create.dto';
import { UserService } from './users.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('all')
  getAllUser() {
    return this.userService.getAllUsers();
  }
  @Post('add')
  addUser(@Body() createUserDto: CreateUserDto) {
    console.log('sada');
    return this.userService.addUser(createUserDto);
  }
}
