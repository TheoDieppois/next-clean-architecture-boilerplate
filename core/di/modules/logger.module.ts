import { ContainerModule, interfaces } from "inversify";
import { DI_TYPES } from "../types";
import { LoggerService } from "@/core/domain/services/logger-service";
import { ClgLogger } from "@/core/infrastructure/services/clg-logger/clg-logger.service";

const initializeModule = (bind: interfaces.Bind) => {
  bind<LoggerService>(DI_TYPES.LoggerRepository).to(ClgLogger);
};

export const LoggerModule = new ContainerModule(initializeModule);
