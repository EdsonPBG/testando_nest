import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { CarModelModule } from './modules/car-model/car-model.module';
import { CarMarcaModule } from './modules/car-marca/car-brand.module';
import { VeiculeModule } from './modules/veicule/veicule.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './modules/auth/auth.module';


@Module({
  imports: [UserModule, CarModelModule, CarMarcaModule, VeiculeModule, DatabaseModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
