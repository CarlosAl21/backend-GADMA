import { Test, TestingModule } from '@nestjs/testing';
import { CtramUsuarioController } from './ctram_usuario.controller';
import { CtramUsuarioService } from './ctram_usuario.service';

describe('CtramUsuarioController', () => {
  let controller: CtramUsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CtramUsuarioController],
      providers: [CtramUsuarioService],
    }).compile();

    controller = module.get<CtramUsuarioController>(CtramUsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
