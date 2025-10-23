import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public getMensage(): any {
    return this.appService.getMenssage();
  }

  @Get('/hello')
  public getHello(): string {
    return this.appService.getHello();
  }
}
