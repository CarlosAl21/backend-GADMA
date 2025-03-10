import { Test, TestingModule } from '@nestjs/testing';
import { CtramTramiteService } from './ctram_tramite.service';

describe('CtramTramiteService', () => {
  let service: CtramTramiteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CtramTramiteService],
    }).compile();

    service = module.get<CtramTramiteService>(CtramTramiteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
