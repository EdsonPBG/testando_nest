import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { VeiculeService } from './veicule.service';
import { CreateVeiculeDto } from './dtos/create_veicule.dto';
import { UpdateVeiculeDto } from './dtos/update_veicule.dto';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('veicule')
export class VeiculeController {
    constructor(private readonly veiculeService: VeiculeService) {}

   @Post()
           async create(
                @Body() 
                   user: CreateVeiculeDto
       ) {
           return await this.veiculeService.createVeicule(user)
       }
             
       @Get()
       async findAll() {
           return await this.veiculeService.findAll()
       }
   
       @Patch(':id')
       async updateVeicule(
           @Param('id') id: string,
           @Body() veicule: UpdateVeiculeDto
       ) {
           return await this.veiculeService.updateVeicule(id, veicule)
       }
}
