import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Task } from './task.model';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @ApiProperty()
  @Prop({ unique: true })
  email: string;

  @ApiProperty()
  @Prop()
  password: string;

  @ApiProperty()
  @Prop({
    type: [{ type: MongooseSchema.Types.ObjectId, ref: Task.name }],
  })
  tasks: Task[];
}

export const UserSchema = SchemaFactory.createForClass(User);
