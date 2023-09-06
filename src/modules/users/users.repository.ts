import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User, UserDocument } from '../../providers/db/models/user.model';
import { SignUpDto } from '../../authentication/dto/sign-up.dto';
import { UserEntity } from '../../common/entities/user.entity';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getOneUserByFilter(filter: object): Promise<User> {
    return await this.userModel
      .findOne(filter, {
        __v: 0,
        products: 0,
      })
      .exec();
  }

  async setTask(
    userId: Types.ObjectId,
    taskId: Types.ObjectId,
  ): Promise<UserEntity> {
    return this.userModel.findByIdAndUpdate(
      userId,
      {
        $addToSet: {
          tasks: taskId,
        },
      },
      { new: true },
    );
  }

  async createNewUser(user: SignUpDto): Promise<User> {
    return await this.userModel.create(user);
  }
}
