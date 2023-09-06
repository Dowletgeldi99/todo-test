import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { CreateTaskDto } from './dto/createTask.dto';
import { ITokenUserData } from '../../common/types/tokenUserData';
import { errors } from '../../common/helpers/responses/error.helper';
import { UsersService } from '../users/users.service';
import { AppConfigService } from '../../config/app/config.service';
import { TaskEntity } from '../../common/entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    private appConfigService: AppConfigService,
    private taskRepo: TaskRepository,
    private usersService: UsersService,
  ) {}

  async getById(id: string): Promise<TaskEntity> {
    const taskExist = await this.taskRepo.getById(id);
    if (!taskExist)
      throw new HttpException(errors.TASK_NOT_FOUND, HttpStatus.NOT_FOUND);

    return taskExist;
  }

  async getUserTasks(creator: ITokenUserData): Promise<TaskEntity[]> {
    return await this.taskRepo.getUserTasks(creator._id);
  }

  async updateTaskStatus(
    productId: string,
    status: boolean,
  ): Promise<TaskEntity> {
    return await this.taskRepo.updateTaskStatus(productId, status);
  }

  async create(
    creator: ITokenUserData,
    body: CreateTaskDto,
  ): Promise<TaskEntity> {
    if (!creator) throw new UnauthorizedException();

    const newTask = await this.taskRepo.create(body, creator._id);

    if (!newTask) {
      throw new HttpException(errors.CREATE_TASK_ERROR, HttpStatus.BAD_REQUEST);
    }

    await this.usersService.setTask(creator._id, newTask._id.toString());

    return newTask;
  }
}
