import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  app.enableCors(); // Cors para app nextjs. Habilita peticiones del exterior
  await app.listen(3001);
}
bootstrap();
