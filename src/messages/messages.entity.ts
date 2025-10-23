export class EntityMessage {
  id: number;
  name: string;
  description: string;
  to: string;
  of: string;

  constructor(
    id: number,
    name: string,
    description: string,
    to: string,
    of: string,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.to = to;
    this.of = of;
  }
}
