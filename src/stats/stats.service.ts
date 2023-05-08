import { Injectable } from '@nestjs/common';
import { DnaService } from 'src/dna/dna.service';
import { StatDto } from './stats.interface';

@Injectable()
export class StatsService {
  constructor(private readonly dnaRepository: DnaService) {}

  async getInfo(): Promise<StatDto> {
    const data = new StatDto();
    data.count_human_dna = await this.dnaRepository.getCount({ isHuman: true });
    data.count_mutant_dna = await this.dnaRepository.getCount({
      isHuman: false,
    });
    data.ratio =
      data.count_mutant_dna === 0
        ? data.count_human_dna
        : data.count_human_dna / data.count_mutant_dna;
    return data;
  }
}
