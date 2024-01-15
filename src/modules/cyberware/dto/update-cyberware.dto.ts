import { PartialType } from '@nestjs/mapped-types';
import { CreateCyberwareDto } from './create-cyberware.dto';

export class UpdateCyberwareDto extends PartialType(CreateCyberwareDto) {}
