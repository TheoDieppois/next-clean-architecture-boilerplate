import { GetUser } from "../../domain/usecases/get-user";
import { ListUsers } from "@/core/domain/usecases/list-users";
import { GetUserInputDto, GetUserOutputDto, GetUsersOutputDto } from "../dto";
import { UserPresenter } from "../presenters/UserPresenter";
import { getInjection } from "@/core/di/config";
import { DI_TYPES } from "@/core/di/types";
import { PostUserInputDto, PostUserOutputDto } from "../dto/post-user.dto";
import { CreateUser } from "@/core/domain/usecases/create-user";

export class UserController {
  private getUserUseCase: GetUser;
  private listUsersUseCase: ListUsers;
  private createUsersUseCase: CreateUser;

  constructor() {
    this.getUserUseCase = getInjection<GetUser>(DI_TYPES.GetUser);
    this.listUsersUseCase = getInjection<ListUsers>(DI_TYPES.ListUsers);
    this.createUsersUseCase = getInjection<CreateUser>(DI_TYPES.CreateUser);
  }

  async getUser(id: GetUserInputDto): Promise<GetUserOutputDto> {
    const userId = GetUserInputDto.parse(id);

    if (!userId) {
      throw new Error("User ID is required");
    }

    try {
      const user = await this.getUserUseCase.execute(userId);

      if (user === "USER_NOT_FOUND") {
        throw new Error("User not found");
      }

      const userPresenter: UserPresenter = {
        id: user.id,
        name: user.name,
        email: user.email,
        displayName: user.getDisplayName(),
      };

      return userPresenter;
    } catch (error) {
      throw new Error("Failed to get user");
    }
  }

  async listUsers(): Promise<GetUsersOutputDto> {
    try {
      const users = await this.listUsersUseCase.execute();

      const userPresenters: UserPresenter[] = users.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        displayName: user.getDisplayName(),
      }));

      return userPresenters;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to list users");
    }
  }

  async createUser({
    email,
    password,
  }: PostUserInputDto): Promise<PostUserOutputDto> {
    const { email: parseEmail, password: parsePassword } =
      PostUserInputDto.parse({ email, password });

    try {
      const newUser = await this.createUsersUseCase.execute(
        parseEmail,
        parsePassword
      );

      const newUserPresenter: UserPresenter = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        displayName: newUser.getDisplayName(),
      };

      return newUserPresenter;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to list users");
    }
  }
}

const UserControllerInstance = new UserController();

export { UserControllerInstance };
