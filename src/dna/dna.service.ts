import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DnaEntity } from './dna.entity';
import { Repository } from 'typeorm';
import { DnaDto } from './dna.interface';

@Injectable()
export class DnaService {
  constructor(
    @InjectRepository(DnaEntity)
    private dnaRepository: Repository<DnaEntity>,
  ) {}

  async add(dna: DnaDto): Promise<DnaEntity> {
    const item = new DnaEntity();
    item.id = dna.id;
    item.isHuman = dna.isHuman;
    const newDna = await this.dnaRepository.save(item);
    return newDna;
  }
  async getAll(): Promise<DnaEntity[]> {
    return this.dnaRepository.find();
  }
  async getById(id: string): Promise<DnaEntity> {
    return this.dnaRepository.findOneBy({ id });
  }
  async deleteById(id: string): Promise<void> {
    await this.dnaRepository.delete({ id });
  }
  async getCount({
    isHuman,
  }: {
    isHuman: DnaEntity['isHuman'];
  }): Promise<number> {
    return this.dnaRepository
      .createQueryBuilder()
      .select('COUNT(*)')
      .where({ isHuman })
      .getCount();
  }
}
