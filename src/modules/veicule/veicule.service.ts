import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Veicules } from './veicules.entity';
import { CreateVeiculeDto } from './dtos/create_veicule.dto';
import { UpdateVeiculeDto } from './dtos/update_veicule.dto';

@Injectable()
export class VeiculeService {
    constructor(
        @InjectModel(Veicules)
            private readonly veiculeModel: typeof Veicules
    ) {}

    async createVeicule (veicule: CreateVeiculeDto) {
        const createdVeicule = await this.veiculeModel.create(veicule)

        return createdVeicule;
    }

    async findAll() {
        return await this.veiculeModel.findAll()
    }

     async updateVeicule(id: string, veicule: UpdateVeiculeDto) {
            if (veicule.plate) {
                await this.validatePlate(veicule.plate)
            }
    
            const updateVeicule = await this.veiculeModel.update(
                { ...veicule },
                { where: { veicules_id: id }, returning: true },
            );
    
            return updateVeicule[1][0]
        }
    
        async validatePlate(plate: string) {
            const plateAlreadyExists = await this.veiculeModel.findOne({
                where: { plate: plate },
            });
    
            if (plateAlreadyExists) {
                throw new HttpException("Esse email já existe!!", HttpStatus.BAD_REQUEST)
            }
        }
} 
