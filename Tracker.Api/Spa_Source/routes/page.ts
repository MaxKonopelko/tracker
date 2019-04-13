interface IPage
{
  route: string;
  title?: string;
}

export class Main
{
  public static readonly Main: IPage = {
    route: '/main',
    title: 'Main'
  };

  public static readonly Auth: IPage = {
    route: '/auth',
    title: 'Auth'
  };
}

export class Auth
{
  public static readonly Login: IPage = {
    route: '/auth/login',
    title: 'Login'
  };

  public static readonly Register: IPage = {
    route: '/auth/register',
    title: 'Register'
  };
}

export class Page
{
  public static readonly Dashboard: IPage = {
    route: '/main/dashboard',
    title: 'Dashboard'
  };

  public static readonly Timer: IPage = {
    route: '/main/timer',
    title: 'Timer'
  };

  public static readonly Reports: IPage = {
    route: '/main/reports',
    title: 'Reports'
  };

  public static readonly Users: IPage = {
    route: '/main/users',
    title: 'Users'
  };

  public static readonly Clients: IPage = {
    route: '/main/clients',
    title: 'Clients'
  };

  public static readonly Projects: IPage = {
    route: '/main/projects',
    title: 'Projects'
  };

  public static readonly Project: IPage = {
    route: '/main/project/:id',
    title: 'Project'
  };

  public static readonly Team: IPage = {
    route: '/main/team',
    title: 'Team'
  };
  public static readonly Help: IPage = {
    route: '/main/help',
    title: 'Help'
  };

}