import { HttpMethod, HttpService } from './http.service';
import { UserRegister } from '../models/models';

export class RegistrationService
{
  public static add(user: UserRegister): Promise<number>
  {
    return HttpService.httpService(`User/add`, HttpMethod.POST, user);
  }
}