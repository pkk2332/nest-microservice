import { Injectable } from '@nestjs/common';
import { ClientOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class MicroserviceConfig {
  registerAuthService(): ClientOptions {
    return {
      options: {
        port: 3002,
        // host: 'auth',
      },
      transport: Transport.TCP,
    };
  }
  registerOrderService(): ClientOptions {
    return {
      options: {
        port: 3001,
        // host: 'order',
      },
      transport: Transport.TCP,
    };
  }
}
