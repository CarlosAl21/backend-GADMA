import { Test, TestingModule } from '@nestjs/testing';
import { CtramRequisitoController } from './ctram_requisito.controller';
import { CtramRequisitoService } from './ctram_requisito.service';

describe('CtramRequisitoController', () => {
  let controller: CtramRequisitoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CtramRequisitoController],
      providers: [CtramRequisitoService],
    }).compile();

    controller = module.get<CtramRequisitoController>(CtramRequisitoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
