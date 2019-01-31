import * as React from 'react';
import { ReactNode } from 'react';
import { MainOmponent } from './main/main.Сomponent';
import { AuthOmponent } from './auth/auth.Сomponent';
import { Redirect, Route, RouteProps, withRouter } from 'react-router';

interface IState
{
  isAuth: boolean;
}

interface IPrivateRouteProps extends RouteProps
{
  component: React.ComponentType<any>;
}

interface IState
{
  redirectToReferrer: boolean;
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb: Function): void
  {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb: Function): void
  {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function PrivateRoute({component, ...rest}: IPrivateRouteProps): any
{
  return (
    <Route {...rest} render={props =>
    {
      const Component = component;

      //const test = fakeAuth.isAuthenticated;
      if (true)
      {
        return <Component {...props} />;
      }
      else
      {
        return <Redirect to={{
          pathname: '/auth/',
          state: {from: props.location}
        }}/>;
      }
    }
    }/>
  );
}

const AuthButton = withRouter(
  ({history}) =>
    fakeAuth.isAuthenticated ?
      (
        <p>
          Welcome!{' '}
          <button
            onClick={() =>
            {
              fakeAuth.signout(() => history.push('/'));
            }}
          >
            Sign out
          </button>
        </p>
      ) : (
        <p>You are not logged in.</p>
      )
);

export class App extends React.Component<{}, IState>
{
  constructor(props: {})
  {
    super(props);
  }

  public testParent = () =>
  {
    fakeAuth.authenticate(() =>
    {
      this.setState({redirectToReferrer: true});
    });
  };

  public render(): ReactNode
  {
    return (
      <div>
        <AuthButton/>
        <Route path="/auth" component={AuthOmponent}/>
        <PrivateRoute path="/main" component={MainOmponent}/>
      </div>
    );

    // return this.state.isAuth ?
    //   (<Routes/>) :
    //   (<Routes2/>)
  }
}