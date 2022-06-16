import { Body, Controller, Post, Inject, Get } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { User } from './user.entity';

@Controller('users')
export default class UsersController {
  constructor(@Inject('EVENTS_SERVICE') private eventsService: ClientProxy) {}

  @Post()
  async createUser(@Body() userData: { firstName: string; lastName: string }) {
    const user = new User(userData.firstName, userData.lastName);
    console.log(`User to be created: ${user.getFullName()}`);

    return this.eventsService.emit<number>(
      {
        cmd: 'users-user-created',
      },
      user,
    );
  }

  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
