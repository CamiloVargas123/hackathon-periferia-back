import { Module } from '@nestjs/common';
import { DnaController } from './dna.controller';
import { DnaService } from './dna.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DnaEntity } from './dna.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DnaEntity])],
  controllers: [DnaController],
  providers: [DnaService],
  exports: [DnaService],
})
export class DnaModule {}
