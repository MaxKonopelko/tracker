import { default as React, ReactNode } from 'react';
import { connect } from 'react-redux';
import { ConnectedProps } from '../../../store/types';
import { Page } from '../../../routes/page';
import { Page_State } from '../../../store/actions/page';

type IProps = ConnectedProps;

export class DashboardComponent extends React.Component<IProps>
{
  constructor(props: IProps)
  {
    super(props);

    this.props.dispatch(Page_State.Thunks.changeTitle(Page.Dashboard.title));
  }

  public render(): ReactNode
  {
    return (
      <div>DashboardComponent</div>
    );
  }
}

export const DashboardComponent_Connect = connect(null)(DashboardComponent);
