import { Test, TestingModule } from '@nestjs/testing';
import { RabbitmqSampleController } from './rabbitmq-sample.controller';
import { RabbitmqSampleService } from './rabbitmq-sample.service';

describe('RabbitmqSampleController', () => {
  let rabbitmqSampleController: RabbitmqSampleController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RabbitmqSampleController],
      providers: [RabbitmqSampleService],
    }).compile();

    rabbitmqSampleController = app.get<RabbitmqSampleController>(RabbitmqSampleController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(rabbitmqSampleController.getHello()).toBe('Hello World!');
    });
  });
});
