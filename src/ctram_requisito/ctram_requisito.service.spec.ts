import { Test, TestingModule } from '@nestjs/testing';
import { CtramRequisitoService } from './ctram_requisito.service';

describe('CtramRequisitoService', () => {
  let service: CtramRequisitoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CtramRequisitoService],
    }).compile();

    service = module.get<CtramRequisitoService>(CtramRequisitoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
