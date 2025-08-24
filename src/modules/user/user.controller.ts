import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dtos/update_user.dto';
import { AuthGuard } from '../auth/auth.guard';
import { CreateUserDto } from './dtos/create_user.dto';
import { UserPaginationDto } from './dtos/user.pagination.dto';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags("usuario")
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
    @ApiOperation({ summary: "Lista de Todos os Usuarios"})
    @ApiBearerAuth()
    @Get()
    @ApiResponse({ status: 200, description: "Lista de usuarios retornadas com sucesso!" })
    async findAll(@Query() userPaginationDto: UserPaginationDto) {
        return await this.userService.findAll(userPaginationDto)
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @ApiParam({ name: "id", description:"id de usuario"})
    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() user: UpdateUserDto
    ) {
        return await this.userService.update(id, user)
    }
}
 