import { Test, TestingModule } from '@nestjs/testing';
import { CatalogResolver } from './catalog.resolver';

describe('CatalogResolver', () => {
  let resolver: CatalogResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatalogResolver],
    }).compile();

    resolver = module.get<CatalogResolver>(CatalogResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
