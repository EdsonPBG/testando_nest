import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator"

export class CreateUserDto {
    @ApiProperty({example:"edson", description: "username"})
    @IsString()
    @IsNotEmpty()
    username: string

    @ApiProperty({example:"Eds@123", description: "password"})
    @IsStrongPassword({
        minLength: 6, 
        minLowercase: 1, 
        minNumbers: 1, 
        minSymbols: 1, 
        minUppercase: 1,
    })
    @IsString()
    @IsNotEmpty()
    password: string

    @ApiProperty({example: "ed@gmail.com", description: "email"})
    @IsString()
    @IsNotEmpty()
    email: string

    @ApiProperty({example: true, description: "active"})
    @IsBoolean()
    @IsOptional()
    active: boolean
}