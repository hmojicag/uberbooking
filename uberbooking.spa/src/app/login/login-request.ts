import { Token } from './token';

export class LoginRequest {
  public state: Number;
  public msg: string;
  public data: Token;
}
