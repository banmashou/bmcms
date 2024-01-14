import { IsNotEmpty, Length, Matches } from 'class-validator'
import { IsNotExists } from 'src/validate/is-not-exists'
export class RegisterDto {
  @IsNotEmpty({ message: '帐号不能为空' })
  @Length(3, 20, { message: '帐号长度为3-20个字符' })
  @Matches(/^[a-z]+$/i, { message: '请输入英文字母' })
  @IsNotExists('user', ['name', 'email', 'mobile'], { message: '帐号已存在' })
  name: string

  @IsNotEmpty({ message: '密码不能为空' })
  @Length(5, 20, { message: '密码长度为5-20个字符' })
  password: string
}
