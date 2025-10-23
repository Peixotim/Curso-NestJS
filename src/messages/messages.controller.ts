import { Controller, Get } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { EntityMessage } from './messages.entity';
@Controller('recados')
export class MessagesController {
  constructor(readonly messagesService: MessagesService) {}

  @Get()
  public findAll(): EntityMessage[] {
    return this.messagesService.findAll();
  }

  @Get('/:id')
  public findByOne(id: number): EntityMessage | undefined {
    return this.messagesService.findOne(id);
  }
}
