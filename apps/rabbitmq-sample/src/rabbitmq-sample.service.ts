import { Injectable } from '@nestjs/common';

@Injectable()
export class RabbitmqSampleService {
  getHello(): string {
    return 'Hello World!';
  }
}
