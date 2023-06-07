import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    port: 3003,
  });

  app.startAllMicroservices();
  app.init();
  await app.listen(3000);
}
bootstrap();
