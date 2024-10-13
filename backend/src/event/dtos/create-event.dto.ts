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
  description: string;

  @IsArray()
  category: string[];

  @IsString()
  @IsOptional()
  location: string;

  @IsDate()
  startDateTime: Date;

  @IsDate()
  endDateTime: Date;

  @IsInt()
  seatCapacity: number;

  @IsEnum(Gender)
  @IsNotEmpty()
  gender: Gender;

  @IsOptional()
  @IsInt()
  price: number;
}
