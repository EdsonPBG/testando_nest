import { Module } from '@nestjs/common';
import { CarModelService } from './car-model.service';
import { CarModelController } from './car-model.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { carModel } from './carModel.entity';

@Module({
  imports: [SequelizeModule.forFeature([carModel])],
  providers: [CarModelService],
  controllers: [CarModelController]
})
export class CarModelModule {}
