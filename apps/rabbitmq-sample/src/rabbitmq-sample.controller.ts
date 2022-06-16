import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { RabbitmqSampleService } from './rabbitmq-sample.service';

@Controller()
export class RabbitmqSampleController {
  constructor(private readonly service: RabbitmqSampleService) {}

  @Get()
  getHello(): string {
    return this.service.getHello();
  }

  @MessagePattern({ cmd: 'create-message' })
  async createMessage(
    @Payload() data: { text: string },
    @Ctx() context: RmqContext,
  ) {
    console.log(
      `Message that is received from our RabbitMQ event creator: ${data.text}`,
    );

    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    channel.ack(originalMsg);

    return { message: data.text };
  }

  @EventPattern({ cmd: 'users-user-created' })
  async handleUserCreation(
    @Payload() data: { firstName: string; lastName: string },
    @Ctx() context: RmqContext,
  ) {
    console.log(
      `User has been created in our separate microservice: ${data.firstName} ${data.lastName}`,
    );

    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    channel.ack(originalMsg);

    return {
      user: { ...data, fullName: `${data.firstName} ${data.lastName}` },
    };
  }
}
