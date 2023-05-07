import { Module } from '@nestjs/common';
import { MutantService } from './mutant/mutant.service';
import { MutantController } from './mutant/mutant.controller';

@Module({
  imports: [],
  controllers: [MutantController],
  providers: [MutantService],
})
export class AppModule {}
