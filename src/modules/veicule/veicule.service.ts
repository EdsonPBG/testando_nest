import { Injectable } from '@nestjs/common';

@Injectable()
export class VeiculeService {
    createVeicule (veicule: object) {
        return {
            message: "Criado com sucesso!",
            data: veicule
        }
    }

    getVeicule () {
        return [{id: 1, placa: "Q2B1F", cor: "PRETO", ano: "2003-06-15", quilometragem: 100000},
                {id: 2, placa: "O3N5X", cor: "VERMELHO", ano: "2026-02-10", quilometragem: 120500},
                {id: 3, placa: "Q3C4F", cor: "PRETO", ano: "2022-10-02", quilometragem: 100000},
                {id: 4, placa: "Q1D4F", cor: "VERMELHO", ano: "2004-06-10", quilometragem: 100000},
                {id: 5, placa: "O2N5X", cor: "AZUL", ano: "2026-01-20", quilometragem: 120200},
                {id: 6, placa: "O3N2X", cor: "PRETO", ano: "2022-06-11", quilometragem: 100100}]
    }
}
