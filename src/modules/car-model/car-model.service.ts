import { Injectable } from '@nestjs/common';

@Injectable()
export class CarModelService {
     create (model: object) {
        return {
            message: 'Criado com sucesso',
            data: model,
        };
    }
        getCar () {
            return {
                message: 'Encontrado com sucesso',
                data: [{nome: "Fiat Mobi",preco: 73990, ano: 2024}, 
                       {nome: "Onix", preco: 120000, ano: 2024},
                       {nome: "Fiat FastBack", preco: 120150, ano: 2020},
                       {nome: "Montana", preco: 158000, ano: 2025},
                       {nome: "Prisma", preco: 520000, ano: 2022}]
            }
        }
}

