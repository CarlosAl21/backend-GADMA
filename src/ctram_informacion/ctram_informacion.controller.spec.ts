import { Test, TestingModule } from '@nestjs/testing';
import { CtramInformacionController } from './ctram_informacion.controller';
import { CtramInformacionService } from './ctram_informacion.service';

describe('CtramInformacionController', () => {
  let controller: CtramInformacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CtramInformacionController],
      providers: [CtramInformacionService],
    }).compile();

    controller = module.get<CtramInformacionController>(CtramInformacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
