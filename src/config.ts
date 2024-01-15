import { registerAs } from '@nestjs/config'

export default registerAs('app', () => {
  return {
    name: 'banmashou',
    app_key: 'banmashou',
  }
})
