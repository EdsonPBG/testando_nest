import { PartialType } from "@nestjs/mapped-types";
import { CreateVeiculeDto } from "./create_veicule.dto";

export class UpdateVeiculeDto extends PartialType(CreateVeiculeDto) {}