import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { VeiculeService } from './veicule.service';
import { CreateVeiculeDto } from './dtos/create_veicule.dto';
import { UpdateVeiculeDto } from './dtos/update_veicule.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@ApiTags("Veiculos")
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
    
       @ApiOperation({summary: "Lista de todos os veiculos"})
       @Get()
       @ApiResponse({status:200, description: "Veiculos encontrados com sucesso"})
       async findAll() {
           return await this.veiculeService.findAll()
       }
   
       @ApiParam({name: "id", description: "id do veiculo"})
       @Patch(':id')
       async updateVeicule(
           @Param('id') id: string,
           @Body() veicule: UpdateVeiculeDto
       ) {
           return await this.veiculeService.updateVeicule(id, veicule)
       }
}
