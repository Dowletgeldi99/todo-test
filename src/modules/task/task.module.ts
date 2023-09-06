import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskService } from './task.service';
import { TaskRepository } from './task.repository';
import { TaskController } from './task.controller';
import { UsersModule } from '../users/users.module';
import { AppConfigModule } from '../../config/app/config.module';
import { Task, TaskSchema } from '../../providers/db/models/task.model';

@Module({
  imports: [
    AppConfigModule,
    UsersModule,
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],
  controllers: [TaskController],
  providers: [TaskService, TaskRepository],
  exports: [TaskService],
})
export class TaskModule {}
