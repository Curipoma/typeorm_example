import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstitutesController } from './controllers/institutes.controller';
import Institutes from './institutes.entity';
import { InstituteService } from './services/institute.service';

@Module({
  imports: [TypeOrmModule.forFeature([Institutes])],
  providers: [InstituteService],
  controllers: [InstitutesController],
})
export class InstitutesModule {}
