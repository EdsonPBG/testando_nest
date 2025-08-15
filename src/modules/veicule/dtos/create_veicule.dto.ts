import { IsNotEmpty, IsNumber, IsString, IsStrongPassword } from "class-validator"

export class CreateVeiculeDto {
    @IsString()
    @IsNotEmpty()
    plate: string

    @IsString()
    @IsNotEmpty()
    color: string

    @IsString()
    @IsNotEmpty()
    year_manufacture: string

    @IsNumber()
    @IsNotEmpty()
    mileage: number

    @IsString()
    user_id: string

    @IsString()
    model_id: string
}