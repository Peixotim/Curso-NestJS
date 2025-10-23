import { Injectable } from '@nestjs/common';

@Injectable() //Um service sempre precisa desssa anotation
export class AppService {
  public home(): string {
    return 'Page Home';
  }
}
