import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    create (user: object) {
        return {
            message: 'Usuario criado com sucesso',
            data: user,
        };
    }
    getInfo () {
        return {
            message: 'Nome do usuario',
            data: {
                "nome": "Edson"
                  }
        }
    }
}
 