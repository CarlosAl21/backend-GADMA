import { Test, TestingModule } from '@nestjs/testing';
import { CtramFormatoController } from './ctram_formato.controller';
import { CtramFormatoService } from './ctram_formato.service';

describe('CtramFormatoController', () => {
  let controller: CtramFormatoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CtramFormatoController],
      providers: [CtramFormatoService],
    }).compile();

    controller = module.get<CtramFormatoController>(CtramFormatoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
