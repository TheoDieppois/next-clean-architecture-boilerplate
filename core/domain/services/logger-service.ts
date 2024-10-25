export interface LoggerService {
  error(message: string): void;
  warning(message: string): void;
  info(message: string): void;
  debug(message: string): void;
}
