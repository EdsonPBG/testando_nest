import { Module } from '@nestjs/common';
import { CarMarcaController } from './car-marca.controller';
import { CarMarcaService } from './car-marca.service';

@Module({
  controllers: [CarMarcaController],
  providers: [CarMarcaService]
})
export class CarMarcaModule {}
