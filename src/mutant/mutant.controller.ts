import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';

import { ValidMutantDto } from './dto/mutant.dto';
import { MutantService } from './mutant.service';

@Controller('mutant')
export class MutantController {
  constructor(private mutantService: MutantService) {}
  @Get()
  ping() {
    return this.mutantService.ping();
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  validMutant(@Body() { dna }: ValidMutantDto) {
    const isMutatnt = this.mutantService.validMutant({ dna });
    if (!isMutatnt) throw new ForbiddenException();
  }
}
