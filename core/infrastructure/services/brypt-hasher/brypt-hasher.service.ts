import { HasherService } from "@/core/domain/services/hasher-service";
import { injectable } from "inversify";
import bcrypt from "bcrypt";

@injectable()
export class BryptHasherService implements HasherService {
  async hashPassword(password: string): Promise<string> {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }
}
