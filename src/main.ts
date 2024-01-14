import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidatePipeCustom } from './pipe/validate-pipe-custom'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidatePipeCustom())
  await app.listen(3000)
}
bootstrap()
