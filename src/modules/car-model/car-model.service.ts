import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { carModel } from './carModel.entity';
import { CreateModelDto } from './dtos/create_model.dto';
import { UpdateModelDto } from './dtos/update_model.dto';

@Injectable()
export class CarModelService {
    constructor(
        @InjectModel(carModel)
        private readonly modelCar: typeof carModel
    ) {}

    async createModel (modelCar: CreateModelDto) {
        const createdModel = await this.modelCar.create(modelCar)

        return createdModel
    }

    async findAll() {
        return await this.modelCar.findAll()
    }

    async updateModel(id: string, name: UpdateModelDto) {
        if (name.model_name) {
            await this.validateNameModel(name.model_name)
        }

        const updateModelCar = await this.modelCar.update(
            { ...name },
            { where: { model_id: id }, returning: true},
        );

        return updateModelCar[1][0]
    }

    async validateNameModel(name: string) {
        const nameModelAlreadyExists = await this.modelCar.findOne({
            where: { model_name: name},
        });

        if (nameModelAlreadyExists) {
            throw new HttpException("Esse modelo já existe!!", HttpStatus.BAD_REQUEST)
        }
    }
}
