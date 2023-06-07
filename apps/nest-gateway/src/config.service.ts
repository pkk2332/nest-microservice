import { Injectable } from '@nestjs/common';
import { ClientOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class ConfigService {
  registerAuthService(): ClientOptions {
    return {
      options: {
        port: 3002,
      },
      transport: Transport.TCP,
    };
  }
  registerOrderService(): ClientOptions {
    return {
      options: {
        port: 3001,
      },
      transport: Transport.TCP,
    };
  }
}
