import { Test, TestingModule } from '@nestjs/testing';
import { CorpoService } from './corpo.service';

describe('CorpoService', () => {
  let service: CorpoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CorpoService],
    }).compile();

    service = module.get<CorpoService>(CorpoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
