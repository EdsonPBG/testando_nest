import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CarModelService } from './car-model.service';
import { CreateModelDto } from './create_model.dto';
import { UpdateModelDto } from './update_model.dto';

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

    @Get()
        async findAll() {
            return await this.carModelService.findAll()
        }

    @Patch(':id')
    async updateModel(
        @Param('id') id: string,
        @Body() name: UpdateModelDto
    ) {
        return await this.carModelService.updateModel(id, name)
    }
}
