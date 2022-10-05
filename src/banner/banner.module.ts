import { Module } from '@nestjs/common';
import { MagentoModule } from 'src/magento/magento.module';
import { BannerResolver } from './banner.resolver';
import { BannerService } from './banner.service';

@Module({
  providers: [BannerResolver, BannerService],
  imports:[MagentoModule]
})
export class BannerModule {}
