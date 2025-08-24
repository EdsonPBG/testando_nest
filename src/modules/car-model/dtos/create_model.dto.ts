import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateModelDto {
    @ApiProperty({ example: "prisma", description: "modelo"})
    @IsString()
    @IsNotEmpty()
    model_name: string

    @ApiProperty({example: "2000/07/21", description: "ano de modelo"})
    @IsString()
    @IsNotEmpty()
    model_year: string

    @ApiProperty({example: "100000", description: "preço dos carros"})
    @IsNumber()
    @IsNotEmpty()
    prices: number

    @ApiProperty({example: "id", description: "id da marca"})
    @IsString()
    brand_id: string
}