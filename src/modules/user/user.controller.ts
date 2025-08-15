import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dtos/update_user.dto';
import { AuthGuard } from '../auth/auth.guard';
import { CreateUserDto } from './dtos/create_user.dto';


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

    @UseGuards(AuthGuard)  
    @Get()
    async findAll() {
        return await this.userService.findAll()
    }
    
    @UseGuards(AuthGuard)
    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() user: UpdateUserDto
    ) {
        return await this.userService.update(id, user)
    }
}
 