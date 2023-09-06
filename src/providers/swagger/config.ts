import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Real Estate V1')
  .setDescription('Real Estate Web Service API - Version 1')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
