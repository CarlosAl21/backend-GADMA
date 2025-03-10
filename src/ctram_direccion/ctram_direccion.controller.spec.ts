import { Test, TestingModule } from '@nestjs/testing';
import { CtramDireccionController } from './ctram_direccion.controller';
import { CtramDireccionService } from './ctram_direccion.service';

describe('CtramDireccionController', () => {
  let controller: CtramDireccionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CtramDireccionController],
      providers: [CtramDireccionService],
    }).compile();

    controller = module.get<CtramDireccionController>(CtramDireccionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
