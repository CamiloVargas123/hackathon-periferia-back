import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  NotFoundException,
} from '@nestjs/common';
import { DnaEntity } from './dna.entity';
import { DnaDto } from './dna.interface';
import { DnaService } from './dna.service';

@Controller('dna')
export class DnaController {
  constructor(private dnaService: DnaService) {}

  @Get()
  async getAll(): Promise<DnaEntity[]> {
    return this.dnaService.getAll();
  }
  @Get(':id')
  async getOne(@Param() params): Promise<DnaEntity> {
    const result = await this.dnaService.getById(params.id);
    if (!result) throw new NotFoundException();
    return result;
  }
  @Post()
  async addOne(@Body() stat: DnaDto): Promise<DnaEntity> {
    return await this.dnaService.add(stat);
  }
  @Delete(':id')
  async delete(@Param() params) {
    return this.dnaService.deleteById(params.id);
  }
}
