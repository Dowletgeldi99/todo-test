import { UsersService } from './users.service';
import { FETCHED } from '../../common/constants/response.constants';
import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ResponseMessage } from '../../common/decorators/response/response.decorator';
import { TransformationInterceptor } from '../../common/interceptors/transform.interceptor';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage(FETCHED)
  @UseInterceptors(TransformationInterceptor)
  async getUserById(@Param('id') id: string) {
    return await this.usersService.getUserById(id);
  }
}
