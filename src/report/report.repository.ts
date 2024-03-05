import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ReportRepository {
  constructor(private prisma: PrismaService) {}
  async execute(id: number): Promise<any> {
    const user_student = await this.prisma.student.findUnique({
      where: { user_id: id },
    });
    return user_student;
  }
}
