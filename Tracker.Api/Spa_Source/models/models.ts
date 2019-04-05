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
  public name: string;
  public city: string;
  public country: string;
  public projectsCount: number;
}

export class Project extends EntityBase
{
  public name: string;
  public description: string;
  public budget: string;
  public status: string;
  public actions: string;
  public clientId: number;
  public clientName: string;
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