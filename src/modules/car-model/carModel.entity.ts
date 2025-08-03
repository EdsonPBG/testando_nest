import { PrimaryKey, Default, DataType, Column, Model, Table, ForeignKey, BelongsTo } from "sequelize-typescript";
import { CarBrand } from "../car-marca/brand.entity";
import { CreateModelDto } from "./create_model.dto";

@Table({
    tableName: 'carModel',
    timestamps: true
})
export class carModel extends Model<carModel, CreateModelDto> {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    public model_id: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    model_name: String

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    model_year: String

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    prices: number

    @ForeignKey(() => CarBrand)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    brand_id: string

    @BelongsTo(() => CarBrand)
    carBrand: CarBrand
}