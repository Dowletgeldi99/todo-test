import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsEmail,
  MinLength,
  Validate,
} from 'class-validator';
import { IsUserAlreadyExist } from '../../modules/users/UserExists';

export class SignUpDto {
  @IsDefined()
  @IsEmail()
  @Validate(IsUserAlreadyExist)
  @ApiProperty({ example: 'qwerty@gmail.com' })
  readonly email: string;

  @IsDefined()
  @IsNotEmpty()
  @MinLength(4)
  @ApiProperty({ example: 'qwerty123' })
  readonly password: string;
}

export class SignUpSuperAdminDto extends SignUpDto {
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty({ example: 'Secret key' })
  secret: string;
}
