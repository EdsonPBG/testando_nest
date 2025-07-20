import { Body, Controller, Get, Post } from '@nestjs/common';
import { VeiculeService } from './veicule.service';

@Controller('veicule')
export class VeiculeController {
    constructor(private readonly veiculeService: VeiculeService) {}

    @Post()
        createVeicule(
            @Body()
                veicule: object
        ) {
            return this.veiculeService.createVeicule(veicule);
        }

    @Get()
        getVeicule() {
            return this.veiculeService.getVeicule();
        }
}
