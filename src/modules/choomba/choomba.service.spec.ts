import { Test, TestingModule } from '@nestjs/testing';
import { ChoombaService } from './choomba.service';

describe('ChoombaService', () => {
  let service: ChoombaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChoombaService],
    }).compile();

    service = module.get<ChoombaService>(ChoombaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
