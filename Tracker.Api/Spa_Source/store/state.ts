import { connectRouter, RouterState } from 'connected-react-router';
import { combineReducers, Reducer } from 'redux';
import { History } from 'history';
import { Team_State } from './actions/team';
import { Page_State } from './actions/page';
import { ProjectProfile_State } from './actions/projectProfile';

export interface IAppState
{
  router: RouterState;
  team: Team_State.State.IState;
  page: Page_State.State.IState;
  projectProfile: ProjectProfile_State.State.IState;
}

export const reducers = (history: History): Reducer<IAppState> => combineReducers<IAppState>({
  router: connectRouter(history),
  team: Team_State.State.Reducer,
  page: Page_State.State.Reducer,
  projectProfile: ProjectProfile_State.State.Reducer
});