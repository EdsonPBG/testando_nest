import { Module } from '@nestjs/common';
import { VeiculeController } from './veicule.controller';
import { VeiculeService } from './veicule.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Veicules } from './veicules.entity';

@Module({
  imports: [SequelizeModule.forFeature([Veicules])],
  controllers: [VeiculeController],
  providers: [VeiculeService]
})
export class VeiculeModule {}
