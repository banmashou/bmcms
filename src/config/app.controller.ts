import { Controller, Get } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Controller('config')
export class AppController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getHello() {
    return this.configService.get('name')
  }
}
