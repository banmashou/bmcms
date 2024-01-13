import { Global, Module } from '@nestjs/common'
import { ConfigModule as BaseModule } from '@nestjs/config'
import config from '../config'
import { ConfigService } from './config.service'

@Global()
@Module({
  imports: [
    BaseModule.forRoot({
      load: [config],
    }),
  ],
  controllers: [],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class CommonModule {}
