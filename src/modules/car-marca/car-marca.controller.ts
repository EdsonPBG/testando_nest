import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarMarcaService } from './car-marca.service';

@Controller('carMarca')
export class CarMarcaController {
    constructor(private readonly carMarcaService: CarMarcaService) {}

    @Post()
        createMarca(
            @Body()
                marca: object
        ) {
            return this.carMarcaService.createMarca(marca);
        }
    
    @Get()
        getMarca() {
            return this.carMarcaService.getMarca();
        }
}
