import { Module } from '@nestjs/common';
import { ClientProxyFactory } from '@nestjs/microservices';
import { AppService } from './app.service';
import { ConfigService } from './config.service';

@Module({
  providers: [
    {
      provide: 'AUTH_SERVICE',
      useFactory: (configService: ConfigService) => {
        const mathSvcOptions = configService.registerAuthService();
        return ClientProxyFactory.create(mathSvcOptions);
      },
      inject: [ConfigService],
    },
    {
      provide: 'ORDER_SERVICE',
      useFactory: (configService: ConfigService) => {
        const mathSvcOptions = configService.registerOrderService();
        return ClientProxyFactory.create(mathSvcOptions);
      },
      inject: [ConfigService],
    },
    ConfigService,
  ],
  exports: ['AUTH_SERVICE', 'ORDER_SERVICE'],
})
export class MicroserviceModule {}
