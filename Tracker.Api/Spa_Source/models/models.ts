export class User
{
  public id: number;
  public email: string;
  public name: string;
}

export class LoginModel
{
  public email: string;
  public password: string;
}

export class OperationResult<T>
{
  public success: boolean;
  public message: string;
  public object: T;
}