import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CarModelService } from './car-model.service';
import { CreateModelDto } from './dtos/create_model.dto';
import { UpdateModelDto } from './dtos/update_model.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@ApiTags("Modelo")
@Controller('carModel')
export class CarModelController {
    constructor(private readonly carModelService: CarModelService) {}
    
    @Post()
        async createModel(
            @Body()
                modelCar: CreateModelDto
        ) {
            return await this.carModelService.createModel(modelCar)
        }

    @ApiOperation({summary:"Lista dos modelos"})
    @Get()
    @ApiResponse({status: 200, description: "modelos encontrados com sucesso"})
        async findAll() {
            return await this.carModelService.findAll()
        }

    @ApiParam({name: "id", description: "id do modelo"})
    @Patch(':id')
    async updateModel(
        @Param('id') id: string,
        @Body() name: UpdateModelDto
    ) {
        return await this.carModelService.updateModel(id, name)
    }
}
