import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosAutomaticoService {
  public getTest(): string {
    return 'Hello World !';
  }
}
