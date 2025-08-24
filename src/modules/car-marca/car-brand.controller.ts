import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CarBrandService } from './car-brand.service';
import { CreateBrandDto } from './dtos/create_brand.dto';
import { UpdateBrandDto } from './dtos/update_brand.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags("Marca de Carro")
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

    @ApiOperation({ summary: "Lista de todas as marcas"})
    @Get()
    @ApiResponse({ status: 200, description: "Lista de marcas retornadas com sucesso!"})
    async findAll() {
        return await this.carBrandService.findAll()
    }

    @ApiParam({ name: "id", description: "id da marca"})
    @Patch(':id')
    async updateBrand(
        @Param('id') id: string,
        @Body() name: UpdateBrandDto
    ) {
        return await this.carBrandService.updateBrand(id, name)
    }
}