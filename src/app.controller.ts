import { Controller, Get } from '@nestjs/common';
import { UserService } from './features/users/user.sevice';
import { User } from '../generated/prisma/client';

@Controller('api')
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  async getUsers(): Promise<User[]> {
    return this.userService.users();
  }
}
