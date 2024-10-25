import { z } from "zod";
import { UserOutputDto } from "./user.dto";

export const GetUserOutputDto = UserOutputDto;
export type GetUserOutputDto = z.infer<typeof GetUserOutputDto>;

export const GetUsersOutputDto = z.array(UserOutputDto);
export type GetUsersOutputDto = z.infer<typeof GetUsersOutputDto>;

export const GetUserInputDto = z.string();
export type GetUserInputDto = z.infer<typeof GetUserInputDto>;
