import {
    Controller,
    Get,
    Param,
} from '@nestjs/common';
import {UserService} from "./user.sevice";
import {User} from "../generated/prisma/client";


// добавляем префикс пути
@Controller('api')
export class AppController {
    constructor(
        private readonly userService: UserService,
    ) {}

    @Get('post/:id')
    async getPostById(@Param('id') id: string): Promise<User[]> {
        return this.userService.users();
    }
}