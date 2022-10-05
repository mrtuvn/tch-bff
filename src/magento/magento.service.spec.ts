import { Test, TestingModule } from '@nestjs/testing';
import { MagentoService } from './magento.service';

describe('MagentoService', () => {
  let service: MagentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MagentoService],
    }).compile();

    service = module.get<MagentoService>(MagentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
