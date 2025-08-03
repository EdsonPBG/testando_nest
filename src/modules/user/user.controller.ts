import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { info } from 'console';
import { CreateUserDto } from './create_user.dto';
import { UpdateUserDto } from './update_user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
        async create(
             @Body() 
                user: CreateUserDto
    ) {
        return await this.userService.create(user)
    }
            
    @Get()
    async findAll() {
        return await this.userService.findAll()
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() user: UpdateUserDto
    ) {
        return await this.userService.update(id, user)
    }
}
 