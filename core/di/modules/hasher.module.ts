import { ContainerModule, interfaces } from "inversify";
import { DI_TYPES } from "../types";
import { HasherService } from "@/core/domain/services/hasher-service";
import { BryptHasherService } from "@/core/infrastructure/services/brypt-hasher/brypt-hasher.service";

const initializeModule = (bind: interfaces.Bind) => {
  bind<HasherService>(DI_TYPES.HasherService).to(BryptHasherService);
};

export const HasherModule = new ContainerModule(initializeModule);
