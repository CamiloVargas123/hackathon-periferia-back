import { Injectable } from '@nestjs/common';
import { ValidMutantDto } from './dto/mutant.dto';
import { DnaService } from 'src/dna/dna.service';
interface Positions {
  row: number;
  column: number;
}
@Injectable()
export class MutantService {
  constructor(private readonly dnaRepository: DnaService) {}
  async validMutant({ dna }: { dna: ValidMutantDto['dna'] }): Promise<boolean> {
    const rows = dna.length;
    const columns = dna[0].length;
    const sequencieLength = 4;
    const allSequencies: Array<Positions[]> = [];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (i === 0) verticalMutans(j);
        if (j === 0) horizontalMutans(i);
        if (i < rows - sequencieLength + 1 && j < columns - sequencieLength + 1)
          diagonalMutans(i, j);
      }
    }

    function verticalMutans(column: number) {
      for (let row = 0; row < rows - sequencieLength + 1; row++) {
        let equal = true;
        for (let i = 1; i < sequencieLength; i++) {
          if (dna[row][column] !== dna[row + i][column]) {
            equal = false;
            break;
          }
        }
        if (equal) {
          const positions: Positions[] = new Array(sequencieLength)
            .fill(undefined)
            .map((_, i) => ({ row: row + i, column }));
          allSequencies.push(positions);
          row += sequencieLength;
        }
      }
    }

    function horizontalMutans(row: number) {
      for (let column = 0; column < columns - sequencieLength + 1; column++) {
        let equal = true;
        for (let i = 1; i < sequencieLength; i++) {
          if (dna[row][column] !== dna[row][column + i]) {
            equal = false;
            break;
          }
        }
        if (equal) {
          const positions: Positions[] = new Array(sequencieLength)
            .fill(undefined)
            .map((_, i) => ({ row: row, column: column + i }));
          allSequencies.push(positions);
          column += sequencieLength;
        }
      }
    }

    function diagonalMutans(row: number, column: number) {
      let equal = true;
      for (let i = 1; i < sequencieLength; i++) {
        if (dna[row][column] !== dna[row + i][column + i]) {
          equal = false;
          break;
        }
      }
      if (equal) {
        const positions: Positions[] = new Array(sequencieLength)
          .fill(undefined)
          .map((_, i) => ({ row: row + i, column: column + i }));
        allSequencies.push(positions);
      }
    }

    await this.dnaRepository.add({
      id: dna.join(),
      isMutant: allSequencies.length > 1,
    });

    return allSequencies.length > 1;
  }
}
