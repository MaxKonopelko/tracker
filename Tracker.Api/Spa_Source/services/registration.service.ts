import { HttpMethod, HttpService } from './http.service';
import { User } from '../models/models';

export class RegistrationService
{
  public static add(user: User): Promise<number>
  {
    return HttpService.httpService(`User/add`, HttpMethod.POST, user);
  }
}