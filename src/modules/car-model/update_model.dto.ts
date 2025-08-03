import { PartialType } from "@nestjs/mapped-types";
import { CreateModelDto } from "./create_model.dto";

export class UpdateModelDto extends PartialType(CreateModelDto) {}