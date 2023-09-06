import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseConfigService {
  constructor(private configService: ConfigService) {}

  get connectionUrlDocker(): string {
    return this.configService.get<string>('mongo.connectionUrlDocker');
  }
}
