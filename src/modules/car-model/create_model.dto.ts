import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateModelDto {
    @IsString()
    @IsNotEmpty()
    model_name: string

    @IsString()
    @IsNotEmpty()
    model_year: string

    @IsNumber()
    @IsNotEmpty()
    prices: number

    @IsString()
    brand_id: string
}