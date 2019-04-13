import { default as React, ReactNode } from 'react';
import { connect } from 'react-redux';
import { ConnectedProps } from '../../../store/types';
import { Team_State } from '../../../store/actions/team';
import { FormControl, InputGroup } from 'react-bootstrap';
import { IAppState } from '../../../store/state';
import { Page_State } from '../../../store/actions/page';
import { Page } from '../../../routes/page';

interface IStateProps
{
  team: Team_State.State.IState;
}

type IProps = ConnectedProps<IStateProps>;

class TeamComponent extends React.Component<IProps>
{
  constructor(props: IProps)
  {
    super(props);

    this.props.dispatch(Page_State.Thunks.changeTitle(Page.Projects.title));
  }

  public componentDidMount(): void
  {
    this.props.dispatch(Page_State.Thunks.changeTitle(Page.Team.title));
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

  public handleChange = (event: any) =>
  {
    const value = event.target.checked;
    this.props.dispatch(Team_State.Actions.Of.showNumAction(value));
  };

  public render(): ReactNode
  {
    return <>
      <div>TeamComponent</div>
      <div>{this.props.team.title}</div>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Checkbox aria-label="Checkbox for following text input" onChange={this.handleChange}/>
        </InputGroup.Prepend>
        <FormControl aria-label="Text input with checkbox"/>
      </InputGroup>

      <input type="text" value={this.props.team.title} onChange={this.onChange}/>
      <input type="text" onChange={this.onChange1}/>
    </>;
  }
}

const mapStateToProps = (state: IAppState): IStateProps => ({
  team: state.team
});

export const TeamComponent_Connect = connect(mapStateToProps)(TeamComponent);
