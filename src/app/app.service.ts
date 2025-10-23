import { Injectable } from '@nestjs/common';

@Injectable() //Um service sempre precisa desssa anotation
export class AppService {
  public getHello(): string {
    return 'Hello World!';
  }

  public getMenssage(): any {
    return 'Olá pessoal';
  }
}
