import { Module } from '@nestjs/common';
import {
  ClientProxyFactory,
  ClientsModule,
  Transport,
} from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './config.service';
import { MicroserviceModule } from './microservice.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuardGuard } from '@app/common/auth-guard/auth-guard.guard';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MicroserviceModule,
    // ConfigService,
    // ClientsModule.register([
    //   {
    //     name: 'AUTH_SERVICE',
    //     transport: Transport.TCP,
    //     options: {
    //       port: 3002,
    //     },
    //   },
    //   {
    //     name: 'ORDER_SERVICE',
    //     transport: Transport.TCP,
    //     options: {
    //       port: 3001,
    //     },
    //   },
    // ]),
  ],
  controllers: [AppController],
  providers: [AppService],
  // exports: ['AUTH_SERVICE', 'ORDER_SERVICE'],
})
export class AppModule {}
