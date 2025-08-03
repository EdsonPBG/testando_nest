import { Module } from '@nestjs/common';
import { CarBrandController } from './car-brand.controller';
import { CarBrandService } from './car-brand.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { CarBrand } from './brand.entity';

@Module({
  imports: [SequelizeModule.forFeature([CarBrand])],
  controllers: [CarBrandController],
  providers: [CarBrandService]
})

export class CarMarcaModule {}
