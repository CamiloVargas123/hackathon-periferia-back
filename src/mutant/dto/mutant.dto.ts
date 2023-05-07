/* eslint-disable prettier/prettier */
import {
  IsString,
  IsArray,
  ArrayMinSize,
  IsNotEmpty,
  MinLength,
} from 'class-validator';

export class ValidMutantDto {
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  @MinLength(4, { each: true })
  @ArrayMinSize(1)
  dna: string[];
}
