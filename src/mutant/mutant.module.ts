import { Module } from '@nestjs/common';
import { DnaModule } from 'src/dna/dna.module';
import { MutantController } from './mutant.controller';
import { MutantService } from './mutant.service';

@Module({
  imports: [DnaModule],
  controllers: [MutantController],
  providers: [MutantService],
})
export class MutantModule {}
