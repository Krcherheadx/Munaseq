// src/event/dtos/create-event.dto.ts
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDate,
  IsInt,
  IsArray,
  IsEnum,
} from 'class-validator';
import { Gender } from '@prisma/client';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  categories: string[];

  @IsString()
  @IsOptional()
  location?: string;

  @IsOptional()
  @IsString()
  startDateTime?: string;

  @IsOptional()
  @IsString()
  endDateTime?: string;

  @IsInt()
  seatCapacity: number;

  @IsEnum(Gender)
  @IsNotEmpty()
  gender: Gender;

  @IsOptional()
  @IsInt()
  price?: number;
}
