"use server";

import { UserControllerInstance } from "@/core/presentation/controllers/UserController";

export const getUser = async (id: string) => {
  const user = await UserControllerInstance.getUser(id);

  return user;
};
