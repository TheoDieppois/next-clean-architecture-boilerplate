// src/core/domain/usecases/GetUser.ts
import { inject, injectable } from "inversify";
import { User } from "../entities/user";
import type { UserRepository } from "../repositories/user-repository";
import { DI_TYPES } from "@/core/di/types";

@injectable()
export class GetUser {
  constructor(
    @inject(DI_TYPES.UserRepository)
    private userRepository: UserRepository
  ) {}

  async execute(id: string): Promise<User | "USER_NOT_FOUND"> {
    return this.userRepository.getUserById(id);
  }
}
