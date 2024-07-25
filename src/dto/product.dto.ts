import {
  IsInt,
  IsString,
  IsOptional,
  IsPositive,
  Min,
  IsNumber,
} from "class-validator";

export class ProductDto {
  @IsOptional()
  @IsInt()
  id?: number;

  @IsString()
  name!: string;

  @IsString()
  description!: string;

  @IsNumber()
  @Min(1)
  price!: number;

  @IsInt()
  @IsPositive()
  stock!: number;
}
