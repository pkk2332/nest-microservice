import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuardGuard } from '@app/common/auth-guard/auth-guard.guard';

// @UseGuards(AuthGuardGuard)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    return this.appService.getHello();
  }

  @Get('/handle')
  handleData(): any {
    return this.appService.handle();
  }
}
