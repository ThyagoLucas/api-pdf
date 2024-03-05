import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

setTimeout(() => {
  console.log(process.env.DATABASE_URL);
}, 5000);
bootstrap();
