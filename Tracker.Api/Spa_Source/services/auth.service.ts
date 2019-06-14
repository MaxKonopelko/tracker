import { JwtRequest, JwtResponse, OperationResult } from '../models/models';
import { HttpMethod, HttpService } from './http.service';
import { routerRedirect } from '../routes';
import { BrowserStorage } from '../libraries/browser-storage';

// function bla<T>(ttt: T): T
// {
//   return ttt;
// }
//
// bla<number>(12);

export class AuthService
{
  public static storage = new BrowserStorage<JwtResponse>('user');

  public static auth(loginModel: JwtRequest): Promise<OperationResult<JwtResponse>>
  {
    return HttpService.send<OperationResult<JwtResponse>>(`Tokens`, HttpMethod.POST, loginModel)
      .then(operationResult =>
      {
        if (operationResult.success)
        {
          this.addJwt(operationResult.object);
          routerRedirect('/main');
        }
        else
        {
          console.log('bla bla bla');
        }
        return operationResult;
      });
  }

  public static addJwt(user: JwtResponse): void
  {
    this.storage.setObject(user);
  }

  public static getJwt(): JwtResponse
  {
    return this.storage.getObject();
  }
}
