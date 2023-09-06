import { Date, ObjectId } from 'mongoose';
import { TaskEntity } from './task.entity';

export class UserEntity {
  id?: ObjectId;
  email: string;
  password: string;
  tasks: TaskEntity[];
  createdAt?: Date;
  updatedAt?: Date;
}
