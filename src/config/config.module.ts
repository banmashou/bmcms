import { Global, Module } from '@nestjs/common'
import { ConfigService } from './config.service'
import { ConfigModule as BaseModule } from '@nestjs/config'
import config from '../config'
import { AppController } from './app.controller'

@Global()
@Module({
  imports: [
    BaseModule.forRoot({
      load: [config],
    }),
  ],
  controllers: [AppController],
  providers: [ConfigService],
})
export class ConfigModule {}
