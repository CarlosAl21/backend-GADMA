import { Test, TestingModule } from '@nestjs/testing';
import { CtramUsuarioService } from './ctram_usuario.service';

describe('CtramUsuarioService', () => {
  let service: CtramUsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CtramUsuarioService],
    }).compile();

    service = module.get<CtramUsuarioService>(CtramUsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
