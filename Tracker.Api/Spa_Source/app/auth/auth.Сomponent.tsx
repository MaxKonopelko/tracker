import * as React from 'react';
import { ReactNode } from 'react';
import { AuthRoutes } from '../../routes/authRoutes';

interface IProps{
  onSelectClick?: () => void;
}

interface IState
{
  isAuthComponent: boolean;
}

export class AuthComponent extends React.Component<IProps, IState>
{
  constructor(props: {})
  {
    super(props);

    this.state = {
      isAuthComponent: false,
    };
  }

  // public testParent = () =>
  // {
  //   console.log(typeof this.props.onSelectClick);
  //
  //   this.props.onSelectClick();
  // };

  public render(): ReactNode
  {
    return <AuthRoutes/>;
  }
}