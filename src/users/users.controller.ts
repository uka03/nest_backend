import { Controller, Get } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('all')
  getAllUser() {
    return this.userService.getAllUsers();
  }
  @Get('add')
  addUser() {
    return this.userService.addUser({ name: 'uka', age: 19 });
  }
}
