import { Module } from '@nestjs/common';
import { StatsController } from './stats.controller';
import { StatsService } from './stats.service';
import { DnaModule } from 'src/dna/dna.module';

@Module({
  imports: [DnaModule],
  controllers: [StatsController],
  providers: [StatsService],
})
export class StatsModule {}
