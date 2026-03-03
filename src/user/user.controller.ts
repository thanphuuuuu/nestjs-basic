import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  // dependency injection
  constructor(private readonly userService: UserService) { }

  // http://localhost:3000/user
  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  // http://localhost:3000/user/1
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }

  // localhost:3000/user/1/welcome
  @Get(':id/welcome')
  getWelcomeMessage(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getWelcomeMessage(id);
  }
}
