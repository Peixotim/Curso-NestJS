import { Injectable } from '@nestjs/common';
import { EntityMessage } from './messages.entity';

@Injectable()
export class MessagesService {
  private messages: EntityMessage[] = [];

  public create(
    id: number,
    name: string,
    description: string,
    to: string,
    of: string,
  ): EntityMessage {
    const newRecado = new EntityMessage(id, name, description, to, of);
    this.messages.push(newRecado);
    return newRecado;
  }

  public findAll(): EntityMessage[] {
    return this.messages;
  }

  public findOne(id: number): EntityMessage | undefined {
    return this.messages.find((find) => find.id == id);
  }
}
