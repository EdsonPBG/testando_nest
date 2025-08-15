import { Table, Model, Column, DataType, Default, PrimaryKey } from "sequelize-typescript";
import { CreateBrandDto } from "./dtos/create_brand.dto";

@Table({
    tableName: 'CarBrand',
    timestamps: true
})
export class CarBrand extends Model<CarBrand, CreateBrandDto> {
    
           @PrimaryKey
           @Default(DataType.UUIDV4)
           @Column(DataType.UUID)
    public brand_id: string
           
            @Column({
            type: DataType.STRING, 
            allowNull: false
        })
           brand_name: string
}