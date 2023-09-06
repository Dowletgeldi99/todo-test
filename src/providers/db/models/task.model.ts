import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { ObjectId, Schema as MongooseSchema } from 'mongoose';
import { User } from './user.model';

export type TaskDocument = Task & Document;

@Schema({ timestamps: true })
export class Task {
  _id: ObjectId;

  @ApiProperty()
  @Prop()
  title: string;

  @ApiProperty()
  @Prop({
    default: false,
  })
  isDone: boolean;

  @ApiProperty()
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  creator: User;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
