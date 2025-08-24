import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateBrandDto {
    @ApiProperty({ example: "chevrolet", description: "marca"})
    @IsString()
    @IsNotEmpty()
    brand_name: string
}