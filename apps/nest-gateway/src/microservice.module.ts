import { Module } from '@nestjs/common';
import { ClientProxyFactory } from '@nestjs/microservices';
import { AppService } from './app.service';
import { MicroserviceConfig } from '@app/common/microservice.config.service';
// import { ConfigService } from './config.service';

@Module({
  providers: [
    {
      provide: 'AUTH_SERVICE',
      useFactory: (configService: MicroserviceConfig) => {
        const mathSvcOptions = configService.registerAuthService();
        return ClientProxyFactory.create(mathSvcOptions);
      },
      inject: [MicroserviceConfig],
    },
    {
      provide: 'ORDER_SERVICE',
      useFactory: (MicroserviceConfig: MicroserviceConfig) => {
        const mathSvcOptions = MicroserviceConfig.registerOrderService();
        return ClientProxyFactory.create(mathSvcOptions);
      },
      inject: [MicroserviceConfig],
    },
    MicroserviceConfig,
  ],
  exports: ['AUTH_SERVICE', 'ORDER_SERVICE'],
})
export class MicroserviceModule {}
