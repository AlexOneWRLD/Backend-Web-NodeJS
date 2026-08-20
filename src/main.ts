import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger
  const config = new DocumentBuilder()
    // заголовок
    .setTitle('Title')
    // описание
    .setDescription('Description')
    // версия
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  // первый параметр - префикс пути, по которому будет доступна документация
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
