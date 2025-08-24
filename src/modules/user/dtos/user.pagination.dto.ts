import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsNumberString, IsOptional, IsPositive, Min } from "class-validator"

export class UserPaginationDto {
    @ApiProperty({example: "2", description: "pular"})
    @IsNumberString()
    // @IsPositive()
    @IsOptional()
    offset: number;

    @ApiProperty({example: "10", description: "limite"})
    @IsNumberString()
    // @IsPositive()
    @IsOptional()
    limit: number;
}