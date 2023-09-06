import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User } from '../../providers/db/models/user.model';
import { Task, TaskDocument } from '../../providers/db/models/task.model';
import { TaskEntity } from '../../common/entities/task.entity';
import { CreateTaskDto } from './dto/createTask.dto';

@Injectable()
export class TaskRepository {
  constructor(
    @InjectModel(Task.name)
    private taskModel: Model<TaskDocument>,
  ) {}

  async getById(id: string): Promise<TaskEntity> {
    return await this.taskModel.findById(new Types.ObjectId(id)).lean().exec();
  }
  async getUserTasks(userId: Types.ObjectId): Promise<TaskEntity[]> {
    return await this.taskModel
      .find({ creator: userId }, { __v: 0 })
      .lean()
      .exec();
  }

  async create(
    product: CreateTaskDto,
    creatorId: Types.ObjectId,
  ): Promise<TaskEntity> {
    const res = await this.taskModel.create({
      ...product,
      creator: creatorId,
    });

    return res.populate([
      {
        path: 'creator',
        model: User.name,
      },
    ]);
  }

  async updateTaskStatus(id: string, status: boolean) {
    return this.taskModel.findByIdAndUpdate(
      new Types.ObjectId(id),
      {
        isDone: status,
      },
      { new: true },
    );
  }
}
