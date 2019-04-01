export class EntityBase
{
  public id?: number;
}

export class User extends EntityBase
{
  public email: string;
  public name: string;
}

export class Client extends EntityBase
{
  public family: string;
  public address: string;
  public city: string;
  public country: string;
}

export class Project extends EntityBase
{
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