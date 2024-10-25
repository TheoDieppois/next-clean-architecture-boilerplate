// src/core/infrastructure/repositories/InMemoryUserRepository.ts
import { UserRepository } from "../../../domain/repositories/user-repository";
import { User } from "../../../domain/entities/user";
import { injectable } from "inversify";

@injectable()
export class InMemoryUserRepository implements UserRepository {
  private user = [
    {
      id: "1",
      name: "Bob",
      email: "bob@gmail.com",
    },
    {
      id: "2",
      name: "Michel",
      email: "michel@gmail.com",
      password: "123456",
    },
  ];

  constructor() {}

  async getUserById(id: string): Promise<User | "USER_NOT_FOUND"> {
    const selectedUser = this.user.find((user) => user.id === id);

    if (!selectedUser) {
      return "USER_NOT_FOUND";
    }

    return new User(selectedUser.id, selectedUser.name, selectedUser.email);
  }

  async listUsers(): Promise<User[]> {
    return this.user.map((user) => new User(user.id, user.name, user.email));
  }

  async createUser(email: string, hashpassword: string): Promise<User> {
    const newUser = new User("3", "Admin", email);

    this.user.push(newUser);

    return newUser;
  }
}
