import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { CustomerModule } from './customer/customer.module';
import { AuthModule } from './auth/auth.module';
import { CatalogModule } from './catalog/catalog.module';
import { MagentoModule } from './magento/magento.module';
import { CartModule } from './cart/cart.module';
import { CmsModule } from './cms/cms.module';
import { SearchModule } from './search/search.module';
import { BlogModule } from './blog/blog.module';
import { StoreModule } from './store/store.module';
import { BannerModule } from './banner/banner.module';
import { CategoryModule } from './category/category.module';
import { RedisModule } from './redis/redis.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    OrderModule,
    CustomerModule,
    AuthModule,
    CatalogModule,
    MagentoModule,
    CartModule,
    CmsModule,
    SearchModule,
    BlogModule,
    StoreModule,
    BannerModule,
    CategoryModule,
    RedisModule,
    EventEmitterModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
