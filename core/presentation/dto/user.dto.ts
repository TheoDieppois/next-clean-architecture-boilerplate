import { z } from "zod";

export const UserOutputDto = z.object({
  id: z.string(),
  name: z.string().min(1),
  email: z.string().email(),
  displayName: z.string(),
});
