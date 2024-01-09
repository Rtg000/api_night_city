import { Test, TestingModule } from '@nestjs/testing';
import { GangService } from './gang.service';

describe('GangService', () => {
  let service: GangService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GangService],
    }).compile();

    service = module.get<GangService>(GangService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
