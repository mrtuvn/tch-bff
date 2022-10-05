import { Test, TestingModule } from '@nestjs/testing';
import { CmsResolver } from './cms.resolver';

describe('CmsResolver', () => {
  let resolver: CmsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CmsResolver],
    }).compile();

    resolver = module.get<CmsResolver>(CmsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
