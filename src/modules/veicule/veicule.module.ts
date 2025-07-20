import { Module } from '@nestjs/common';
import { VeiculeController } from './veicule.controller';
import { VeiculeService } from './veicule.service';

@Module({
  controllers: [VeiculeController],
  providers: [VeiculeService]
})
export class VeiculeModule {}
