import { Test, TestingModule } from '@nestjs/testing';
import { GangController } from './gang.controller';
import { GangService } from './gang.service';

describe('GangController', () => {
  let controller: GangController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GangController],
      providers: [GangService],
    }).compile();

    controller = module.get<GangController>(GangController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
