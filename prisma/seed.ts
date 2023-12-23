import { PrismaClient } from '@prisma/client'
import { Random } from 'mockjs'
const prisma = new PrismaClient()

async function run() {
  for (let i = 0; i < 30; i++) {
    await prisma.user.create({
      data: {
        name: Random.cname(),
        password: Random.string(),
        App: {
          create: {
            title: Random.csentence(),
            content: Random.cparagraph(),
            preview: Random.image('300x300'),
          },
        },
      },
    })
  }
  const user = await prisma.user.findFirst({
    orderBy: {
      id: 'asc',
    },
    take: 1,
  })
  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      name: 'admin',
      password: 'admin888',
    },
  })
}

run()
