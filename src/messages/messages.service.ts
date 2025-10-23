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
    const newMessage = new EntityMessage(id, name, description, to, of);
    this.messages.push(newMessage);

    return newMessage;
  }

  public findAll(): EntityMessage[] {
    return this.messages;
  }

  public findOne(id: number): EntityMessage | undefined {
    return this.messages.find((search) => search.id === id);
  }

  public remove(name: string): boolean {
    for (let i = 0; i < this.messages.length; i++) {
      const messageE: EntityMessage = this.messages[i];
      if (messageE.name == name) {
        this.messages.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}
