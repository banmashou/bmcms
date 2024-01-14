import { IsNotEmpty, Length, Matches } from 'class-validator'
export class RegisterDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  @Length(3, 20, { message: '用户名长度为3-20个字符' })
  @Matches(/^[a-z]$/i, { message: '请输入英文字母' })
  name: string
  @IsNotEmpty({ message: '密码不能为空' })
  password: string
}
