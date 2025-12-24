import {
  IsEnum,
  IsNotEmpty,
  IsInt,
  IsString,
  IsOptional,
  IsDateString,
  IsArray,
  ArrayNotEmpty,
  IsUUID,
} from 'class-validator';

export enum LocationType {
  HOME_VISIT = 'HOME_VISIT',
  MOBILE = 'MOBILE',
}

export class GetAvailabilityDto {
  @IsEnum(LocationType)
  @IsNotEmpty()
  locationType: LocationType;

  @IsInt()
  @IsNotEmpty()
  groupSize: number;

  @IsArray()
  @ArrayNotEmpty()
  @IsUUID('4', { each: true })
  serviceIds: string[];

  @IsDateString()
  @IsNotEmpty()
  date: string;

  @IsOptional()
  @IsString()
  postcode?: string;
}
