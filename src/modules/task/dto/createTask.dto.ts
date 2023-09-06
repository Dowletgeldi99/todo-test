import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'do push up' })
  readonly title: string;
}

export class UpdateTaskStatusDto {
  @IsBoolean()
  @ApiProperty({ example: true })
  readonly status: boolean;
}
