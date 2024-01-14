import { Global, Module } from '@nestjs/common'
import { ConfigModule as BaseModule } from '@nestjs/config'
import config from '../config'
import { ConfigService } from './config.service'
import { PrismaService } from './prisma.service'

@Global()
@Module({
  imports: [
    BaseModule.forRoot({
      load: [config],
    }),
  ],
  controllers: [],
  providers: [ConfigService, PrismaService],
  exports: [ConfigService, PrismaService],
})
export class CommonModule {}
