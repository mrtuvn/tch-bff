import { Test, TestingModule } from '@nestjs/testing';
import { BannerResolver } from './banner.resolver';

describe('BannerResolver', () => {
  let resolver: BannerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BannerResolver],
    }).compile();

    resolver = module.get<BannerResolver>(BannerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
