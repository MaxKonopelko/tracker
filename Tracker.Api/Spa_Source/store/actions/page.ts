import { IActionType } from '../types';
import { Dispatch } from 'react-redux';

export namespace Page_State
{
  export namespace Actions
  {
    export enum Type
    {
      CHANGE_TITLE = '[PAGE] CHANGE_TITLE',
    }

    export namespace Types
    {
      import Type = Page_State.Actions.Type;

      export class ChangeTitleAction implements IActionType<string>
      {
        public type: Type.CHANGE_TITLE;
        public payload: string;
      }

      export type Actions = ChangeTitleAction;
    }

    export namespace Of
    {
      export const changeTitleAction = (payload: string): Types.ChangeTitleAction => ({
        type: Type.CHANGE_TITLE,
        payload: payload
      });
    }
  }

  export namespace State
  {
    export interface IState
    {
      title: string;
    }

    export const init: IState = {
      title: '',
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
        default:
          return state;
      }
    };
  }

  export namespace Thunks
  {
    export const changeTitle = (title: string): any => (dispatch: Dispatch) =>
    {
      document.title = title;
      dispatch(Actions.Of.changeTitleAction(title));
    };

    export const test = (dispatch: Dispatch) => {

    };
  }
}
