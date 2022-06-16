import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SayHelloCommand } from './say-hello.command';
import { SayHelloHandler } from './say-hello.handler';
import { SaidHelloEvent } from './say-hello.event';
import { SaidHelloEventsHandler } from './say-hello.event-handler';
import { MyCqrsModule } from './my-cqrs.module';

@Module({
  imports: [MyCqrsModule],
  controllers: [AppController],
  providers: [
    AppService,
    SayHelloCommand,
    SayHelloHandler,
    SaidHelloEvent,
    SaidHelloEventsHandler,
  ],
})
export class AppModule {}
