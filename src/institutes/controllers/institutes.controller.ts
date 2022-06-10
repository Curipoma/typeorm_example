import { Controller, Get } from '@nestjs/common';

@Controller('institutes')
export class InstitutesController {
  @Get()
  findAll(): string {
    return 'This array all institutes';
  }
}
