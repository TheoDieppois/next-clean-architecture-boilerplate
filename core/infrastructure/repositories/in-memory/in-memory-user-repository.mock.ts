// src/core/infrastructure/repositories/InMemoryUserRepository.ts
import { UserRepository } from "../../../domain/repositories/user-repository";
import { User } from "../../../domain/entities/user";
import { injectable } from "inversify";

@injectable()
export class InMemoryUserRepositoryMock implements UserRepository {
  private mock_user = [
    {
      id: "1",
      name: "John Doe",
      email: "test1@gmail.com",
    },
    {
      id: "2",
      name: "Jane Doe",
      email: "test2@gmail.com",
      password: "123456",
    },
  ];

  constructor() {}

  async getUserById(id: string): Promise<User> {
    const selectedUser = this.mock_user.find((user) => user.id === id);

    return new User(selectedUser!.id, selectedUser!.name, selectedUser!.email);
  }

  async listUsers(): Promise<User[]> {
    return this.mock_user.map(
      (user) => new User(user.id, user.name, user.email)
    );
  }

  async createUser(): Promise<User> {
    return new User("4", "test", "test");
  }
}
