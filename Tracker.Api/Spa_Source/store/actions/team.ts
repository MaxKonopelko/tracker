import { IActionType } from '../types';

export namespace Team_State
{
  export namespace Actions
  {
    export enum Type
    {
      CHANGE_TITLE = '[TEAM] CHANGE_TITLE',
      CHANGE_NUM   = '[TEAM] CHANGE_NUM',
    }

    export namespace Types
    {
      export class ChangeTitleAction implements IActionType<string>
      {
        public type: Type.CHANGE_TITLE;
        public payload: string;
      }

      export class ChangeNumAction implements IActionType<number>
      {
        public type: Type.CHANGE_NUM;
        public payload: number;
      }

      export type Actions = ChangeTitleAction | ChangeNumAction;
    }

    export namespace Of
    {
      export const changeTitleAction = (payload: string): Types.ChangeTitleAction => ({
        type: Type.CHANGE_TITLE,
        payload: payload
      });

      export const changeNumAction = (payload: number): Types.ChangeNumAction => ({
        type: Type.CHANGE_NUM,
        payload: payload
      });
    }
  }

  export namespace State
  {
    export interface IState
    {
      title: string;
      num?: number;
    }

    export const init: IState = {
      title: 'Empty11',
    };

    export const Reducer = (state: IState = init, action: Actions.Types.Actions): IState =>
    {
      switch (action.type)
      {
        case Actions.Type.CHANGE_TITLE:
          return {
            ...state,
            title: action.payload
          };
        case Actions.Type.CHANGE_NUM:
          return {
            ...state,
            num: action.payload
          };
        default:
          return state;
      }
    };
  }
}