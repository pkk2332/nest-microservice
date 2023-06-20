import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MicroserviceConfig } from '@app/common/microservice.config.service';
import { MicroserviceModule } from './microservice.module';

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
