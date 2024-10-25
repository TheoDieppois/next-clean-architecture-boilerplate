"use server";

import { UserControllerInstance } from "@/core/presentation/controllers/UserController";
import { revalidatePath } from "next/cache";

export const createUser = async (email: string, password: string) => {
  const user = await UserControllerInstance.createUser({
    email: "theo@gmail.com",
    password: "admin",
  });

  return user;
};
