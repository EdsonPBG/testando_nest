import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CarBrandService } from './car-brand.service';
import { CreateBrandDto } from './create_brand.dto';
import { UpdateBrandDto } from './update_brand.dto';

@Controller('carBrand')
export class CarBrandController {
    constructor(private readonly carBrandService: CarBrandService) { }

    @Post()
    async createBrand(
        @Body()
        brand: CreateBrandDto
    ) {
        return await this.carBrandService.createBrand(brand)
    }

    @Get()
    async findAll() {
        return await this.carBrandService.findAll()
    }

    @Patch(':id')
    async updateBrand(
        @Param('id') id: string,
        @Body() name: UpdateBrandDto
    ) {
        return await this.carBrandService.updateBrand(id, name)
    }
}