import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { EntityMessage } from './messages.entity';
@Controller('message')
export class MessagesController {
  constructor(readonly messagesService: MessagesService) {}

  @Get()
  public findAll(): EntityMessage[] {
    return this.messagesService.findAll();
  }

  @Post()
  public create(
    @Body()
    body: {
      id: number;
      name: string;
      description: string;
      to: string;
      of: string;
    },
  ): EntityMessage {
    console.log(body);
    return this.messagesService.create(
      body.id,
      body.name,
      body.description,
      body.to,
      body.of,
    );
  }

  @Get(':id')
  public findByOne(@Param() id: string): EntityMessage | undefined {
    const getId: number = Number(id);
    return this.messagesService.findOne(getId);
  }

  @Delete(':name')
  public delete(@Param('name') name: string): boolean {
    return this.messagesService.remove(name);
  }
}
