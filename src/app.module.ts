import { MongoDBModule } from './providers/db/database.module';
import { AppConfigModule } from './config/app/config.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './authentication/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TaskModule } from './modules/task/task.module';

@Module({
  imports: [
    AppConfigModule,
    MongoDBModule,
    AuthModule,
    TaskModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'swagger-static'),
      serveRoot: process.env.NODE_ENV === 'development' ? '/' : '/api/swagger',
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
