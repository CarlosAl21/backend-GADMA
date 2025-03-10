import { Test, TestingModule } from '@nestjs/testing';
import { CtramInformacionService } from './ctram_informacion.service';

describe('CtramInformacionService', () => {
  let service: CtramInformacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CtramInformacionService],
    }).compile();

    service = module.get<CtramInformacionService>(CtramInformacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
