// src/core/presentation/presenters/UserPresenter.ts
import { z } from "zod";

export const UserPresenterSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  displayName: z.string(),
});

export type UserPresenter = z.infer<typeof UserPresenterSchema>;
