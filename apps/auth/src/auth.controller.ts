import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

// @Controller()
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//   @Get()
//   getHello(): string {
//     return this.authService.getHello();
//   }
// }

@Controller()
export class AuthController {
  @MessagePattern({ cmd: 'sum' })
  accumulate(data: number[]): { key: string; data: number } {
    return {
      key: 'auth',
      data: (data || []).reduce((a, b) => a + b),
    };
  }

  @EventPattern('user_created')
  async handleUserCreated(data: Record<string, unknown>) {
    // business logic
    console.log('handleing the data ' + data);
  }
}
