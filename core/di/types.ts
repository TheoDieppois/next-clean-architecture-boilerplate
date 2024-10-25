export const DI_TYPES = {
  // Repositories
  UserRepository: Symbol.for("UserRepository"),

  //Services
  LoggerRepository: Symbol.for("LoggerRepository"),
  HasherService: Symbol.for("HasherService"),

  // UseCases
  ListUsers: Symbol.for("ListUsers"),
  GetUser: Symbol.for("GetUser"),
  CreateUser: Symbol.for("CreateUser"),
};
