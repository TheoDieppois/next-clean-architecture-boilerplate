import "reflect-metadata";

import { Container } from "inversify";
import { UserModule } from "./modules/user.module";
import { LoggerModule } from "./modules/logger.module";
import { HasherModule } from "./modules/hasher.module";

const ApplicationContainer = new Container({
  defaultScope: "Singleton",
});

const initailizeContainer = () => {
  ApplicationContainer.load(UserModule);
  ApplicationContainer.load(LoggerModule);
  ApplicationContainer.load(HasherModule);
};

initailizeContainer();

export const getInjection = <T>(symbol: symbol) => {
  return ApplicationContainer.get<T>(symbol);
};

export { ApplicationContainer };
