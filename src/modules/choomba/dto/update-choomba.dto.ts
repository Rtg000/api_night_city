import { PartialType } from '@nestjs/mapped-types';
import { CreateChoombaDto } from './create-choomba.dto';

export class UpdateChoombaDto extends PartialType(CreateChoombaDto) {}
