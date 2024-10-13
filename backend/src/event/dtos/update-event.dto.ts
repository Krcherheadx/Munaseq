// src/event/dtos/create-event.dto.ts
import { Gender } from '@prisma/client';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDate,
  IsInt,
  IsArray,
  IsEnum,
} from 'class-validator';

export class UpdateEventDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsOptional()
  @IsArray()
  categories?: string[];

  @IsString()
  @IsOptional()
  location?: string;

  @IsOptional()
  @IsString()
  startDate?: String;

  @IsOptional()
  @IsString()
  endDate?: String;

  @IsOptional()
  @IsInt()
  seatCapacity?: number;

  @IsOptional()
  @IsEnum(Gender)
  @IsNotEmpty()
  gender?: Gender;

  @IsOptional()
  @IsInt()
  price?: number;
}
