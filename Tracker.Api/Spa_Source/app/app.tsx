import * as React from 'react';
import { ReactNode } from 'react';
import { AppRoutes } from '../routes/authRoutes';
import { fakeAuth } from '../routes/private.routes';

interface IState
{
  isAuth: boolean;
}

interface IState
{
  redirectToReferrer: boolean;
}

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
      <AppRoutes/>
    );
  }
}