import { Test, TestingModule } from '@nestjs/testing';
import { CtramLinksController } from './ctram_links.controller';
import { CtramLinksService } from './ctram_links.service';

describe('CtramLinksController', () => {
  let controller: CtramLinksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CtramLinksController],
      providers: [CtramLinksService],
    }).compile();

    controller = module.get<CtramLinksController>(CtramLinksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
