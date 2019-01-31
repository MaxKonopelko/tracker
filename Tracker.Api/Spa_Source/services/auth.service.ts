import { LoginModel, OperationResult, User } from '../models/models';
import { HttpMethod, HttpService } from './http.service';
import { routerRedirect } from '../routes';
import { BrowserStorage } from '../libreris/browser-storage';
import { Growl } from '../libreris/growl';

function bla<T>(ttt: T): T
{
  return ttt;
}

bla<number>(12);

export class AuthService
{
  private static storage = new BrowserStorage<User>('user');

  public static auth(loginModel: LoginModel): Promise<OperationResult<User>>
  {
    return HttpService.httpService<OperationResult<User>>(`User/login`, HttpMethod.POST, loginModel)
      .then(operationResult =>
      {
        console.log('boolAuth', operationResult);
        if (operationResult.success)
        {
          this.addUser(operationResult.object);
          routerRedirect('/main');
        }
        else
        {
          Growl.error(operationResult.message);
          console.log('bla bla bla');
        }
        return operationResult;
      });
  }

  public static addUser(user: User): void
  {
    this.storage.setObject(user);
  }
}
