import { Controller, Get } from '@nestjs/common';
import { ConceitosAutomaticoService } from './conceitos-automatico.service';
@Controller('conceitos-automatico')
export class ConceitosAutomaticoController {
  constructor(private readonly service: ConceitosAutomaticoService) {}

  @Get()
  public getTest(): string {
    return this.service.getTest();
  }
}
