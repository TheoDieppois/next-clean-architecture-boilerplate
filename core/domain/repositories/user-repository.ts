import { User } from "../entities/user";

export interface UserRepository {
  getUserById(id: string): Promise<User | "USER_NOT_FOUND">;
  listUsers(): Promise<User[]>;
  createUser(email: string, hashpassword: string): Promise<User>;
}
