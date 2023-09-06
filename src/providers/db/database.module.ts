import { connectionParams } from '../../common/helpers/mongo/connectionParams';
import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { DatabaseConfigService } from '../../config/database/mongo/config.service';
import { DatabaseConfigModule } from '../../config/database/mongo/config.module';

@Module({
  imports: [
    DatabaseConfigModule,
    MongooseModule.forRootAsync({
      imports: [DatabaseConfigModule],
      inject: [DatabaseConfigService],
      // useFactory: (databaseConfigService: DatabaseConfigService) => {
      //   const options: MongooseModuleOptions = {
      //     uri: databaseConfigService.connectionUrlDocker,
      //     ...connectionParams,
      //   };
      //   return options;
      // },
      useFactory: (databaseConfigService: DatabaseConfigService) => ({
        uri: databaseConfigService.connectionUrlDocker,
        ...connectionParams,
      }),
    }),
  ],
})
export class MongoDBModule {}
