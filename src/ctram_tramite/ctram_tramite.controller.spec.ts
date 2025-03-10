import { Test, TestingModule } from '@nestjs/testing';
import { CtramTramiteController } from './ctram_tramite.controller';
import { CtramTramiteService } from './ctram_tramite.service';

describe('CtramTramiteController', () => {
  let controller: CtramTramiteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CtramTramiteController],
      providers: [CtramTramiteService],
    }).compile();

    controller = module.get<CtramTramiteController>(CtramTramiteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
