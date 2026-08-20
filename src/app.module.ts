import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { UserService } from './features/users/user.sevice';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, UserService],
})
export class AppModule {}
