import { default as React, ReactNode } from 'react';
import { connect } from 'react-redux';
import { Page } from '../../../routes/page';
import { Page_State } from '../../../store/actions/page';
import { ConnectedProps } from '../../../store/types';

type IProps = ConnectedProps;

export class ReportsComponent extends React.Component<IProps>
{
  constructor(props: IProps)
  {
    super(props);

    this.props.dispatch(Page_State.Thunks.changeTitle(Page.Reports.title));
  }

  public render(): ReactNode
  {
    return (
      <div>ReportsComponent</div>
    );
  }
}

export const ReportsComponent_Connect = connect(null)(ReportsComponent);
