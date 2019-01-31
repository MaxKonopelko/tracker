import * as React from 'react';
import { ReactNode } from 'react';
import { Routes } from '../../routes/routes';

interface IProps{
  onSelectClick?: () => void;
}

interface IState
{
  isAuthComponent: boolean;
}

export class AuthOmponent extends React.Component<IProps, IState>
{
  constructor(props: {})
  {
    super(props);

    this.state = {
      isAuthComponent: false,
    };
  }

  public testParent = () =>
  {
    console.log(typeof this.props.onSelectClick);

    this.props.onSelectClick();
  };

  public render(): ReactNode
  {
    return <Routes/>;
  }
}