import { registerAs } from '@nestjs/config'

export default registerAs('app', () => {
  return {
    name: 'banmashou',
    city: 'shanghai',
    copyright: '2024',
  }
})
