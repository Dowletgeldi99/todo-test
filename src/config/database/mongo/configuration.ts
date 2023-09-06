import { registerAs } from '@nestjs/config';

export default registerAs('mongo', () => ({
  connectionUrlDocker: process.env.MONGODB_URL,
}));
