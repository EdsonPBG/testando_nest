import { Injectable } from '@nestjs/common';

@Injectable()
export class CarMarcaService {
    createMarca (marca: object) {
        return {
            message: "Criado com sucesso!",
            data: marca
        };
    };

    getMarca () {
        return [{nomeMarca: "Fiat"}, {nomeMarca: "Chevrolet"}];
    };
}
