import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { CarModelModule } from './modules/car-model/car-model.module';
import { CarMarcaModule } from './modules/car-marca/car-marca.module';
import { VeiculeModule } from './modules/veicule/veicule.module';


@Module({
  imports: [UserModule, CarModelModule, CarMarcaModule, VeiculeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
