import { Test, TestingModule } from '@nestjs/testing';
import { MutantService } from './mutant.service';

describe('MutantService', () => {
  let service: MutantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MutantService],
    }).compile();

    service = module.get<MutantService>(MutantService);
  });

  it('test ADN 1', () => {
    const ADN: string[] = [
      'ATGCGA',
      'CAGTGC',
      'TTATGT',
      'AGAAGG',
      'CCCCTA',
      'TCACTG',
    ];
    const expectedResult = true;
    const result = service.validMutant({ dna: ADN });
    expect(result).toEqual(expectedResult);
  });
  it('test ADN 2', () => {
    const ADN: string[] = [
      'ATGCGA',
      'CAGTGC',
      'TTATTT',
      'AGACGG',
      'GCGTCA',
      'TCACTG',
    ];
    const expectedResult = false;
    const result = service.validMutant({ dna: ADN });
    expect(result).toEqual(expectedResult);
  });
  it('test ADN 3', () => {
    const ADN: string[] = [
      'ATGCGATGA',
      'CAGTGCTGA',
      'TTATGTTGA',
      'AGAAGGTGA',
      'CCCCTAAAA',
      'TCACTGTGA',
    ];
    const expectedResult = true;
    const result = service.validMutant({ dna: ADN });
    expect(result).toEqual(expectedResult);
  });
});
