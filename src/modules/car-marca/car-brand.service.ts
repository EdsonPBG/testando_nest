import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CarBrand } from './brand.entity';
import { CreateBrandDto } from './dtos/create_brand.dto';
import { UpdateBrandDto } from './dtos/update_brand.dto';


@Injectable()
export class CarBrandService {
    constructor(
        @InjectModel(CarBrand)
        private readonly brandCar: typeof CarBrand
    ) { }

    async createBrand(brand: CreateBrandDto) {
        const createBrand = await this.brandCar.create(brand)

        return createBrand
    }

    async findAll() {
        return await this.brandCar.findAll()
    }

    async updateBrand(id: string, name: UpdateBrandDto) {
        if (name.brand_name) {
            await this.validateName(name.brand_name)
        }

        const updateBrandCar = await this.brandCar.update(
            { ...name },
            { where: { brand_id: id}, returning: true },
        );

        return updateBrandCar[1][0]
    }

    async validateName(name: string) {
        const nameAlreadExists = await this.brandCar.findOne({
            where: { brand_name: name },
        });

        if (nameAlreadExists) {
            throw new HttpException("Esse nome já existe!!", HttpStatus.BAD_REQUEST)
        }
    }
}
