import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarModelService } from './car-model.service';

@Controller('carModel')
export class CarModelController {
      constructor(private readonly carModelService: CarModelService) {}
    
        @Post()
            create(
                @Body() 
                    model: object
        ) {
            return this.carModelService.create(model)
        }
    
        @Get()
           getCar() {
            return this.carModelService.getCar()
           }
}
