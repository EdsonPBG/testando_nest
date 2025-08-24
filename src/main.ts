import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { swaggerStart } from './Documentation/swagger.docs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  swaggerStart(app);

  app.useGlobalPipes( // Validação automatica
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
