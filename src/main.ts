import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// file root -> entry point of ur nest js application

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // global setting
  // env

  // starts a http server
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
