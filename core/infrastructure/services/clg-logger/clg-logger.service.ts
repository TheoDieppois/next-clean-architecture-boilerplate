import { LoggerService } from "@/core/domain/services/logger-service";
import { injectable } from "inversify";

@injectable()
export class ClgLogger implements LoggerService {
  error(message: string): void {
    console.error(message);
  }
  warning(message: string): void {
    console.warn(message);
  }
  info(message: string): void {
    console.info(message);
  }
  debug(message: string): void {
    console.debug(message);
  }
}
