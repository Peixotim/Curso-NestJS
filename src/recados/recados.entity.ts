export class EntityRecado {
  name: string;
  description: string;
  to: string;
  of: string;

  constructor(name: string, description: string, to: string, of: string) {
    this.name = name;
    this.description = description;
    this.to = to;
    this.of = of;
  }
}
