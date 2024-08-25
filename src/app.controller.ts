import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private appService: AppService) {}

  @Get('v1/hello-world')
  getHello(){
    return this.appService.getHello();
  }
}
