import { Test, TestingModule } from '@nestjs/testing';
import { CtramLinksService } from './ctram_links.service';

describe('CtramLinksService', () => {
  let service: CtramLinksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CtramLinksService],
    }).compile();

    service = module.get<CtramLinksService>(CtramLinksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
