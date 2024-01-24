import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile } from '@nestjs/common'
import { UploadService } from './upload.service'
import { Uploader } from './upload.decorator'
import { Auth } from 'src/auth/auth.decorator'

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('image')
  @Uploader('image')
  @Auth()
  image(@UploadedFile() file: Express.Multer.File) {
    return file
  }
}
