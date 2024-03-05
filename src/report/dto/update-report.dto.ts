import { PartialType } from '@nestjs/mapped-types';
// eslint-disable-next-line prettier/prettier
import { CreateReportDto } from './create-report.dto';

export class UpdateReportDto extends PartialType(CreateReportDto) {}
