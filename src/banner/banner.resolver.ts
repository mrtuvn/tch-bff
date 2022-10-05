import { Resolver } from '@nestjs/graphql';
import { BannerService } from './banner.service';

@Resolver()
export class BannerResolver {
    constructor(
        private readonly service: BannerService
    ) {}

    
}
