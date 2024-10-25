// src/core/domain/usecases/ListUsers.ts
import { inject, injectable } from "inversify";
import { User } from "../entities/user";
import type { UserRepository } from "../repositories/user-repository";
import { DI_TYPES } from "@/core/di/types";
import type { LoggerService } from "../services/logger-service";

@injectable()
export class ListUsers {
  constructor(
    @inject(DI_TYPES.UserRepository)
    private userRepository: UserRepository,

    @inject(DI_TYPES.LoggerRepository)
    private loggerRepository: LoggerService
  ) {}

  async execute(): Promise<User[]> {
    this.loggerRepository.info("[Listing all users] start");

    return this.userRepository.listUsers();
  }
}
