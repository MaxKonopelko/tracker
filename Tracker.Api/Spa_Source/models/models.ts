export class EntityBase
{
  public id: number;
  public createdDate?: Date;
}

export class JwtResponse
{
  public accessToken: string;
  public refreshToken: string;
  public userDisplay: UserDisplay;
}

export class UserDisplay extends EntityBase
{
  public email: string;
  public password: string;
  public name: string;
  public age?: any;
}

export class UserRegister
{
  public email: string;
  public password: string;
  public name: string;
  public age?: string;
}

export class User extends EntityBase
{
  public email: string;
  public name: string;
  public age?: string;
  public projectsCount?: string;
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
  public description?: string;
  public budget?: string;
  public status?: string;
  public actions?: string;
  public clientId?: number;
  public client?: string;
  public usersCount?: string;
  public users?: User[] = [];
}

export class JwtRequest
{
  public email: string;
  public password?: string;
  public refreshToken?: string;
  public grantType: 'password' | 'refresh_token';
}

export class OperationResult<T>
{
  public success: boolean;
  public message: string;
  public object: T;
}