import { default as React, ReactNode } from 'react';
import { connect } from 'react-redux';
import { ConnectedProps } from '../../../store/types';
import { Team_State } from '../../../store/actions/team';

type IProps = ConnectedProps;

class TeamComponent extends React.Component<IProps>
{
  constructor(props: IProps)
  {
    super(props);
  }

  private onChange = (event: React.FormEvent<HTMLInputElement>) =>
  {
    const value = event.currentTarget.value;

    this.props.dispatch(Team_State.Actions.Of.changeTitleAction(value));
    //this.props.dispatch({type: '[TEAM] CHANGE_TITLE', payload: value});
  };

  private onChange1 = (event: React.FormEvent<HTMLInputElement>) =>
  {
    const value = parseInt(event.currentTarget.value);

    this.props.dispatch(Team_State.Actions.Of.changeNumAction(value));
  };

  public render(): ReactNode
  {
    return (
      <>
        <div>TeamComponent</div>

        <input type="text" onChange={this.onChange}/>
        <input type="text" onChange={this.onChange1}/>
      </>
    );
  }
}

export const TeamComponent_Connect = connect(null)(TeamComponent);
