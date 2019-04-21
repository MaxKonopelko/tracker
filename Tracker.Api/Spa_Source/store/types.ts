import { Action, AnyAction } from 'redux';
import { DispatchProp } from 'react-redux';

export interface IActionType<T = never> extends Action
{
  payload?: T;
}

export type ConnectedProps<T1 = {}, T2 = {}, T3 = {}, T4 = {}> =
  & T1
  & T2
  & T3
  & T4
  & DispatchProp<AnyAction>;