import { connectRouter, RouterState } from 'connected-react-router';
import { combineReducers, Reducer } from 'redux';
import { History } from 'history';
import { Team_State } from './actions/team';

export interface IAppState
{
  router: RouterState;
  team: Team_State.State.IState;
}

export const reducers = (history: History): Reducer<IAppState> => combineReducers<IAppState>({
  router: connectRouter(history),
  team: Team_State.State.Reducer
});