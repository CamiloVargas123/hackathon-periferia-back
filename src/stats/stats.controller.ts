import { Controller, Get } from '@nestjs/common';
import { StatDto } from './stats.interface';
import { StatsService } from './stats.service';

@Controller('stats')
export class StatsController {
  constructor(private statsService: StatsService) {}

  @Get()
  async getInfo(): Promise<StatDto> {
    return this.statsService.getInfo();
  }
}
