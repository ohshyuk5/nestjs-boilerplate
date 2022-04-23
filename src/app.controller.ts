import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller({ version: VERSION_NEUTRAL })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  healthCheck(): string {
    return this.appService.healthCheck();
  }
}
