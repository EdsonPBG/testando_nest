import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString, IsStrongPassword } from "class-validator"

export class CreateVeiculeDto {
    @ApiProperty({example: "ABCSD", description: "placa do carro"})
    @IsString()
    @IsNotEmpty()
    plate: string

    @ApiProperty({example: "VERMELHO", description: "cor do veiculo"})
    @IsString()
    @IsNotEmpty()
    color: string

    @ApiProperty({example: "2000/07/21", description: "ano de fabricação"})
    @IsString()
    @IsNotEmpty()
    year_manufacture: string

    @ApiProperty({example: "10.0000", description: "quilometragem do veiculo"})
    @IsNumber()
    @IsNotEmpty()
    mileage: number

    @ApiProperty({example: "id", description: "id do usuario"})
    @IsString()
    user_id: string

    @ApiProperty({example: "id", description: "id do modelo"})
    @IsString()
    model_id: string
}