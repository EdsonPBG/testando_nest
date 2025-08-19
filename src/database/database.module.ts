import { User } from "src/modules/user/user.entity";
import * as dotenv from "dotenv";
import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize/dist/sequelize.module";
import { CarBrand } from "src/modules/car-marca/brand.entity";
import { carModel } from "src/modules/car-model/carModel.entity";
import { Veicules } from "src/modules/veicule/veicules.entity";

dotenv.config();
@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: "postgres",
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            models: [
                User,
                CarBrand,
                carModel,
                Veicules
            ],
            // synchronize: true,
            // sync: {alter: true},
            logging: false,
            autoLoadModels: true
        }),
    ],
    controllers: [],
    providers: [],
})
export class DatabaseModule {}