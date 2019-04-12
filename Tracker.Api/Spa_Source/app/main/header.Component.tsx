import { default as React, ReactNode } from 'react';
import { ConnectedProps } from '../../store/types';
import { IAppState } from '../../store/state';
import { connect } from 'react-redux';
import { Team_State } from '../../store/actions/team';

//iconfinder_bear_russian_animal.svg

interface IStateProps
{
  team: Team_State.State.IState;
}

type IProps = ConnectedProps<IStateProps>;

class HeaderComponent extends React.Component<IProps>
{
  public render(): ReactNode
  {
    return (
      <header id="header">
        <div className="wrap">
          <div className="head-inner">
            <div className="head-title">
              <h1>Dashboard</h1>
            </div>
            <h3>{this.props.team.title + this.props.team.num}</h3>

            <div className="user-dropdown">
              <a href="#" className="link-user">
                <span className="avatar"><img src="/images/iconfinder_bear_russian_animal.svg" width="50" height="50" alt="image"/></span>
                Admin
                <strong className="title-post">Administrator</strong>
                <span className="icon-arrow"/>
              </a>
              <ul className="dropdown">
                <li><a href="#">My Profile</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Log out</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state: IAppState): IStateProps => ({
  team: state.team
});

export const HeaderComponent_Connect = connect(mapStateToProps)(HeaderComponent);