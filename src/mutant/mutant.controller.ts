import {
  Body,
  Controller,
  ForbiddenException,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';

import { ValidMutantDto } from './dto/mutant.dto';
import { MutantService } from './mutant.service';

@Controller('mutant')
export class MutantController {
  constructor(private mutantService: MutantService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async validMutant(@Body() { dna }: ValidMutantDto) {
    const isMutatnt = await this.mutantService.validMutant({ dna });
    if (!isMutatnt) throw new ForbiddenException();
  }
}
