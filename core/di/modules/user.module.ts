import { ContainerModule, interfaces } from "inversify";
import type { UserRepository } from "@/core/domain/repositories/user-repository";
import { InMemoryUserRepository } from "@/core/infrastructure/repositories/in-memory/in-memory-user-repository";
import { DI_TYPES } from "../types";
import { ListUsers } from "@/core/domain/usecases/list-users";
import { GetUser } from "@/core/domain/usecases/get-user";
import { InMemoryUserRepositoryMock } from "@/core/infrastructure/repositories/in-memory/in-memory-user-repository.mock";
import { CreateUser } from "@/core/domain/usecases/create-user";

const initializeModule = (bind: interfaces.Bind) => {
  // if (process.env.NODE_ENV === "development") {
  //   bind<UserRepository>(DI_TYPES.UserRepository).to(
  //     InMemoryUserRepositoryMock
  //   );
  // } else {
  bind<UserRepository>(DI_TYPES.UserRepository).to(InMemoryUserRepository);
  // }

  // UseCases
  bind<ListUsers>(DI_TYPES.ListUsers).to(ListUsers);
  bind<GetUser>(DI_TYPES.GetUser).to(GetUser);
  bind<CreateUser>(DI_TYPES.CreateUser).to(CreateUser);
};

export const UserModule = new ContainerModule(initializeModule);
