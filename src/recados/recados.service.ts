import { Injectable } from '@nestjs/common';
import { EntityRecado } from './recados.entity';

@Injectable()
export class RecadosService {
  public create(
    name: string,
    description: string,
    to: string,
    of: string,
  ): EntityRecado {
    return new EntityRecado(name, description, to, of);
  }
}
