// src/core/domain/usecases/GetUser.ts
import { inject, injectable } from "inversify";
import { User } from "../entities/user";
import type { UserRepository } from "../repositories/user-repository";
import { DI_TYPES } from "@/core/di/types";
import type { HasherService } from "../services/hasher-service";

@injectable()
export class CreateUser {
  constructor(
    @inject(DI_TYPES.UserRepository)
    private userRepository: UserRepository,

    @inject(DI_TYPES.HasherService)
    private hasherService: HasherService
  ) {}

  async execute(email: string, password: string): Promise<User> {
    const hashpassword = await this.hasherService.hashPassword(password);

    console.log(hashpassword, "pwd");

    return this.userRepository.createUser(email, hashpassword);
  }
}
