import { Date, ObjectId } from 'mongoose';
import { UserEntity } from './user.entity';

export class TaskEntity {
  _id?: ObjectId;
  title: string;
  isDone: boolean;
  creator: UserEntity;
  createdAt?: Date;
  updatedAt?: Date;
}
