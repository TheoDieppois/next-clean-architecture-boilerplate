export interface HasherService {
  hashPassword(password: string): Promise<string>;
}
