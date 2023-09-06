import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { ResponseMessage } from '../../common/decorators/response/response.decorator';
import { ADDED, FETCHED } from '../../common/constants/response.constants';
import { TransformationInterceptor } from '../../common/interceptors/transform.interceptor';
import { CreateTaskDto, UpdateTaskStatusDto } from './dto/createTask.dto';
import { JwtAuthGuard } from '../../authentication/guards/jwt-auth.guard';
@ApiTags('Task')
@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get('my')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage(FETCHED)
  @UseInterceptors(TransformationInterceptor)
  @UseGuards(JwtAuthGuard)
  async getUserProducts(@Req() req) {
    return await this.taskService.getUserTasks(req.user);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage(FETCHED)
  @UseInterceptors(TransformationInterceptor)
  @UseGuards(JwtAuthGuard)
  async getById(@Param('id') id: string) {
    return await this.taskService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  @ResponseMessage(ADDED)
  @UseInterceptors(TransformationInterceptor)
  @UseGuards(JwtAuthGuard)
  async create(@Req() req, @Body() body: CreateTaskDto) {
    return await this.taskService.create(req.user, body);
  }

  @Put(':id/status')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @ResponseMessage(ADDED)
  @UseInterceptors(TransformationInterceptor)
  async updateProductStatus(
    @Req() req,
    @Param('id') id: string,
    @Body() body: UpdateTaskStatusDto,
  ) {
    return await this.taskService.updateTaskStatus(id, body.status);
  }
}
