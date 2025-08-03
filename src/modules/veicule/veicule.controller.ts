import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { VeiculeService } from './veicule.service';
import { CreateVeiculeDto } from './create_veicule.dto';
import { UpdateVeiculeDto } from './update_veicule.dto';

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
