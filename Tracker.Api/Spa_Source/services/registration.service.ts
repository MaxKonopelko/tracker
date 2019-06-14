import { HttpMethod, HttpService } from './http.service';
import { UserRegister } from '../models/models';

export class RegistrationService
{
  public static add(user: UserRegister): Promise<number>
  {
    return HttpService.send(`Users/add`, HttpMethod.POST, user);
  }
}