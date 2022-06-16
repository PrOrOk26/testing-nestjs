import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RabbitmqSampleController } from './rabbitmq-sample.controller';
import { RabbitmqSampleService } from './rabbitmq-sample.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
  controllers: [RabbitmqSampleController],
  providers: [RabbitmqSampleService],
})
export class RabbitmqSampleModule {}
