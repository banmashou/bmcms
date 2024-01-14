import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/common/prisma.service'
import { RegisterDto } from './dto/register.dto'
import { hash } from 'argon2'

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}
  async register(dto: RegisterDto) {
    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        password: await hash(dto.password),
      },
    })
    return user
  }
}
