// src/auth/dtos/user-signup.dto.ts
import { Gender } from '@prisma/client';
import {
  IsArray,
  IsBase64,
  IsEmail,
  IsEnum,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class userSignUpDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  // @IsOptional()
  // @IsString()
  // organizationName?: string;

  // @IsBase64()
  // @IsOptional()
  // profilePicture?: any; // Assume the profile picture is a URL

  @IsOptional()
  @IsString()
  visibleName?: string; // Can be name or organization name

  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  categories?: string[]; // Array of interests

  @IsOptional()
  @IsString()
  description?: string; // Biography

  @IsOptional()
  @IsJSON()
  socialAccounts?: object; // JSON object for social media accounts
}
