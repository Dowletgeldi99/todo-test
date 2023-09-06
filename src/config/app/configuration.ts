import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  env: process.env.APP_ENV,
  url: process.env.APP_URL,
  host: process.env.APP_HOST,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET_KEY,
  jwtExpirationTime: process.env.JWT_EXPIRATION_TIME,
}));
