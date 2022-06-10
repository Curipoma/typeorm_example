import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Institutes from 'src/institutes/institutes.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InstituteService {
  constructor(
    @InjectRepository(Institutes)
    private institutesReposity: Repository<Institutes>,
  ) {}
  findAll(): Promise<Institutes[]> {
    return this.institutesReposity.find();
  }
  findOne(id: number): Promise<Institutes> {
    return this.institutesReposity.findOneBy({ id: String(id) });
  }
}
