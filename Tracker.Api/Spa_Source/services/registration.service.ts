import { IUser } from '../models/models';
import { HttpMethod, HttpService } from './http.service';

export class RegistrationService
{
  public static add(user: IUser): Promise<number>
  {
    return HttpService.httpService(`User/add`, HttpMethod.POST, user);
  }
}