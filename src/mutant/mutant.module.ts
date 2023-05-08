import { Module } from '@nestjs/common';
import { MutantService } from './mutant.service';
import { MutantController } from './mutant.controller';

@Module({
  controllers: [MutantController],
  providers: [MutantService],
})
export class MutantModule {}
