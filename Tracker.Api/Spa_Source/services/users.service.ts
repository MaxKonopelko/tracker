import { HttpMethod, HttpService } from './http.service';
import { User } from '../models/models';

export class UsersService
{
  public static get(): Promise<User[]>
  {
    return HttpService.httpService(`Users/get-all`, HttpMethod.GET);
  }
}