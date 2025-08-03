import { PrimaryKey, Default, DataType, Column, Model, Table, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "../user/user.entity";
import { carModel } from "../car-model/carModel.entity";
import { CreateVeiculeDto } from "./create_veicule.dto";

@Table({
    tableName: 'Veicules',
    timestamps: true
})
export class Veicules extends Model<Veicules, CreateVeiculeDto> {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    public veicules_id: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    plate: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    color: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    year_manufacture: string

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    mileage: number
 
    @ForeignKey(() => User) 
    @Default(DataType.UUIDV4)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    user_id: string

    @BelongsTo(() => User)
    user: User

    @ForeignKey(() => carModel)
    @Default(DataType.UUIDV4)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    model_id: string

    @BelongsTo(() => carModel)
    carModel: carModel
}