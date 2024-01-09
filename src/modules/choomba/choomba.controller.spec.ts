import { Test, TestingModule } from '@nestjs/testing';
import { ChoombaController } from './choomba.controller';
import { ChoombaService } from './choomba.service';

describe('ChoombaController', () => {
  let controller: ChoombaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChoombaController],
      providers: [ChoombaService],
    }).compile();

    controller = module.get<ChoombaController>(ChoombaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
