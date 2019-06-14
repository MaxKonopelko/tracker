import { HttpMethod, HttpService } from './http.service';
import { User } from '../models/models';

export class UsersService
{
  public static get(): Promise<User[]>
  {
    return HttpService.send(`Users/get-all`, HttpMethod.GET);
  }
}