import { Test, TestingModule } from '@nestjs/testing';
import { CtramDireccionService } from './ctram_direccion.service';

describe('CtramDireccionService', () => {
  let service: CtramDireccionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CtramDireccionService],
    }).compile();

    service = module.get<CtramDireccionService>(CtramDireccionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
