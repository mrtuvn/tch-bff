import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { CustomerModule } from './customer/customer.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [OrderModule, CustomerModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
