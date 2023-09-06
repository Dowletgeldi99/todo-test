import { swaggerConfig } from './providers/swagger/config';
import { AppConfigService } from './config/app/config.service';
import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import compression from 'compression';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const appConfig: AppConfigService = app.get(AppConfigService);
  app.useGlobalPipes(
    // By adding this validation pipe globally, nest js helps us to validate body params, query param etc..
    new ValidationPipe({
      transform: true,
      forbidUnknownValues: false,
      whitelist: true, // When Whitelist is set to true, You will not be allowed to send additional props apart from DTO Property
    }),
  );
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  setupSwagger(app);

  // secure app by setting various HTTP headers.
  app.use(helmet());

  // enable gzip compression.
  app.use(compression());
  app.use(cookieParser(appConfig.jwtSecret));

  app.enableCors({
    origin: '*',
    credentials: true,
    exposedHeaders: ['Authorization'],
  });

  const port = appConfig.port || 3030;
  await app
    .listen(port, '0.0.0.0')
    .then(() =>
      console.log(`Application is running on: http://localhost:${port}`),
    );
}

dotenv.config();
bootstrap();

function setupSwagger(app: INestApplication) {
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger', app, document, { useGlobalPrefix: true });
}
