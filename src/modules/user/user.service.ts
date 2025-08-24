import { InjectModel } from "@nestjs/sequelize";
import { User } from "./user.entity";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create_user.dto";
import { hashSync as bcryptHashSync } from 'bcrypt';
import { UpdateUserDto } from "./dtos/update_user.dto";
import { UserPaginationDto } from "./dtos/user.pagination.dto";
import { take } from "rxjs";
import { skip } from "node:test";

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User) 
        private readonly userModel: typeof User) {}

        async create (user: CreateUserDto) { //Função para criar usuario e ao mesmo tempo validar email e usuario
            await this.validateEmail (user.email)
            await this.validateUsername (user.username)

            const createdUser = await this.userModel.create({
                ...user,
                password: bcryptHashSync (user.password, 10)
            });

            return createdUser;
        }

        async findAll(userPaginationDto: UserPaginationDto) { //função para chamar todos os dados dos usuarios
            const limit = userPaginationDto.limit ?? 10;    //Verifica se o usuario informou o valor, se não informar, define como 10
            const offset = userPaginationDto.offset ?? 0;   
                    
            return await this.userModel.findAll({
                offset:offset,
                limit:limit,
            });   
        }

        async update (id: string, user: UpdateUserDto) { //Função para atualizar os dados do usuario
            if (user.email) {
                await this.validateEmail (user.email)
            }

            const updateUser = await this.userModel.update(
                { ...user },
                { where: { user_id: id }, returning: true },
            );

            return updateUser [1][0]
        }

        async validateEmail (email: string) {
            const emailAlreadyExists = await this.userModel.findOne({
                where: { email: email },
            });

            if (emailAlreadyExists) {
                throw new HttpException("Esse email já esta em uso", HttpStatus.BAD_REQUEST)
            }

            return true
        }

        async validateUsername (username: string) {
            const user = await this.userModel.findOne({
                where: { username: username},
            });

            if (user) {
                throw new HttpException("Esse usuario já esta em uso", HttpStatus.BAD_REQUEST)
            }

            return true
        }
}