import { PartialType } from '@nestjs/mapped-types';
import { CreateCorpoDto } from './create-corpo.dto';

export class UpdateCorpoDto extends PartialType(CreateCorpoDto) {}
