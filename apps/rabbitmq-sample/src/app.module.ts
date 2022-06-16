import { Module } from '@nestjs/common';
import { RabbitmqSampleModule } from './rabbitmq-sample.module';

@Module({
  imports: [RabbitmqSampleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
