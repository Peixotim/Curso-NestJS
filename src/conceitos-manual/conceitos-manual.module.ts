import { Module } from '@nestjs/common';
import { ConceitosManualService } from './conceitos-manual.service';
import { ConceitosManualController } from './conceitos-manual.controller';

@Module({
  providers: [ConceitosManualService],
  controllers: [ConceitosManualController]
})
export class ConceitosManualModule {}
