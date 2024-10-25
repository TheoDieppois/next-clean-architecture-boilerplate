export class User {
  constructor(public id: string, public name: string, public email: string) {}

  getDisplayName(): string {
    return `${this.name} <${this.email}>`;
  }
}
