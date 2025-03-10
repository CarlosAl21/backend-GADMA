import { Test, TestingModule } from '@nestjs/testing';
import { CtramFormatoService } from './ctram_formato.service';

describe('CtramFormatoService', () => {
  let service: CtramFormatoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CtramFormatoService],
    }).compile();

    service = module.get<CtramFormatoService>(CtramFormatoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
