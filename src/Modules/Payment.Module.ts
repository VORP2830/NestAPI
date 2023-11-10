import { Module } from '@nestjs/common';
import { PaymentController } from 'src/Controllers/Payment.Controller';
import { PaymentService } from 'src/Services/Payment.Service';
import { PrismaService } from 'src/prisma.Service';

@Module({
  controllers: [PaymentController],
  providers: [PaymentService, PrismaService],
})
export class PaymentModule {}
