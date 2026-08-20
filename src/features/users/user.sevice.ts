import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma.service';
import { User } from '../../../generated/prisma/client';

@Injectable()
export class UserService {
  // внедряем зависимость
  constructor(private prisma: PrismaService) {}

  // получение всех пользователей
  async users(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
}
