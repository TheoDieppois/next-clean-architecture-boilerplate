import { z } from "zod";
import { UserOutputDto } from "./user.dto";

export const PostUserOutputDto = UserOutputDto;
export type PostUserOutputDto = z.infer<typeof PostUserOutputDto>;

export const PostUserInputDto = z.object({
  email: z.string(),
  password: z.string(),
});
export type PostUserInputDto = z.infer<typeof PostUserInputDto>;
