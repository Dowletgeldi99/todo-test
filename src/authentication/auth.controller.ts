import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { UserEntity } from '../common/entities/user.entity';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { ResponseMessage } from '../common/decorators/response/response.decorator';
import { REGISTERED } from '../common/constants/response.constants';
import { TokenInterceptor } from '../common/interceptors/token.interceptor';
import { TransformationInterceptor } from '../common/interceptors/transform.interceptor';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  @ApiCreatedResponse({
    description: 'User has been successfully created.',
    type: UserEntity,
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @HttpCode(HttpStatus.OK)
  @ResponseMessage(REGISTERED)
  @UseInterceptors(TransformationInterceptor)
  @UseInterceptors(TokenInterceptor)
  async register(@Body() body: SignUpDto): Promise<any> {
    return this.authService.register(body);
  }

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(TransformationInterceptor)
  @UseInterceptors(TokenInterceptor)
  async login(@Body() signInDto: SignInDto) {
    return this.authService.login(signInDto);
  }

  @Get('/me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async me(@Request() req) {
    return req.user;
  }
}
