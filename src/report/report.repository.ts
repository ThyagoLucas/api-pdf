import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';

@Injectable()
export class ReportRepository {
  findGiftCardSells(createReportDto: CreateReportDto) {
    createReportDto;
    return 'This action adds a new report';
  }
}
