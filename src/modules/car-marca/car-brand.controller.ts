import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CarBrandService } from './car-brand.service';
import { CreateBrandDto } from './dtos/create_brand.dto';
import { UpdateBrandDto } from './dtos/update_brand.dto';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
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