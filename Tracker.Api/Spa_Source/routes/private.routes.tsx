import { Redirect, Route, RouteProps, withRouter } from 'react-router';
import * as React from 'react';

interface IPrivateRouteProps extends RouteProps
{
  component: React.ComponentType<any>;
}

export function PrivateRoute({component, ...rest}: IPrivateRouteProps): any
{
  return (
    <Route {...rest} render={props =>
    {
      const Component = component;

      //const test = fakeAuth.isAuthenticated;
      if (5 > 3)
      {
        return <Component {...props} />;
      }
      else
      {
        // return <Redirect to={{
        //   pathname: '/auth/login',
        //   state: {from: props.location}
        // }}/>;
        return null;
      }
    }
    }/>
  );
}

export const fakeAuth = {
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