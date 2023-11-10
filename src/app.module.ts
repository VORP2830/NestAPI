import { Module } from '@nestjs/common';
import { PaymentModule } from './Modules/Payment.Module';

@Module({
  imports: [PaymentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
