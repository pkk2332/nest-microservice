import { Controller, Get } from '@nestjs/common';
import { OrderService } from './order.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class OrderController {
  @MessagePattern({ cmd: 'sum2' })
  accumulate(data: number[]): any {
    return {
      key: 'order',
      data: (data || []).reduce((a, b) => a + b),
    };
  }
}
