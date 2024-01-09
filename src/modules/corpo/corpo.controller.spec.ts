import { Test, TestingModule } from '@nestjs/testing';
import { CorpoController } from './corpo.controller';
import { CorpoService } from './corpo.service';

describe('CorpoController', () => {
  let controller: CorpoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CorpoController],
      providers: [CorpoService],
    }).compile();

    controller = module.get<CorpoController>(CorpoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
