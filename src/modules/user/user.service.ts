import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectModel } from '@nestjs/sequelize';
import { UpdateUserDto } from './dtos/update_user.dto';
import { CreateUserDto } from './dtos/create_user.dto';
import { hashSync as bcryptHashSync } from 'bcrypt';

@Injectable()
export class UserService {
    [x: string]: any;
    constructor(
        @InjectModel(User)
        private readonly userModel: typeof User
    ) {}

    async create(user: CreateUserDto) {
        await this.validateEmail(user.email)

        const createdUser = await this.userModel.create({
            ...user, 
            password: bcryptHashSync(user.password, 10),
        });

        const userAlreadyExists = await this.userModel.create({
            ...user, 
            password: bcryptHashSync(user.password, 10),
        });

        if (userAlreadyExists) {
            throw new HttpException("Esse usuario já existe!!", HttpStatus.BAD_REQUEST)
        }
        
        return createdUser
    }

    async findAll() {
        return await this.userModel.findAll()
    }

    async update(id: string, user: UpdateUserDto) {
        if (user.email) {
            await this.validateEmail(user.email)
        }

        const updateUser = await this.userModel.update(
            { ...user },
            { where: { user_id: id }, returning: true },
        );

        return updateUser[1][0]
    }

    async validateEmail(email: string) {
        const emailAlreadyExists = await this.userModel.findOne({
            where: { email: email },
        });

        if (emailAlreadyExists) {
            throw new HttpException("Esse email já existe!!", HttpStatus.BAD_REQUEST)
        }

        return true
    }


    async findByUsername(username: string) {
        const user = await this.userModel.findOne({
            where: { username: username },
        });

        return user;
    }
}


// function bcryptHashSync(username: string, arg1: number): string {
//     throw new Error('Function not implemented.');
// }

