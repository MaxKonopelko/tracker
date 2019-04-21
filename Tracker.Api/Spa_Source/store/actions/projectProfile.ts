import { IActionType } from '../types';
import { Project } from '../../models/models';
import { Dispatch } from 'react-redux';
import { Page_State } from './page';
import { ProjectService } from '../../services/project.service';

export namespace ProjectProfile_State
{
  export namespace Actions
  {
    export enum Type
    {
      GET_BY_ID    = '[PROJECT_PROFILE] GET_BY_ID',
      SET_BY_ID    = '[PROJECT_PROFILE] SET_BY_ID',
      CHANGE_INPUT = '[PROJECT_PROFILE] CHANGE_INPUT',
      CLEAR        = '[PROJECT_PROFILE] CLEAR',
    }

    export namespace Types
    {
      export interface IProfileProject
      {
        name: string;
        value: string;
      }

      export class ChangeProjectAction implements IActionType<Project>
      {
        public type: Type.GET_BY_ID;
        public payload: Project;
      }

      export class ChangeInputAction implements IActionType<IProfileProject>
      {
        public type: Type.CHANGE_INPUT;
        public payload: IProfileProject;
      }

      export class Clear implements IActionType
      {
        public type: Type.CLEAR;
      }

      export type Actions = ChangeProjectAction | ChangeInputAction | Clear;
    }

    export namespace Of
    {
      export const getByIdAction = (payload: Project): Types.ChangeProjectAction => ({
        type: Type.GET_BY_ID,
        payload: payload
      });

      export const changeInputAction = (payload: Types.IProfileProject): Types.ChangeInputAction => ({
        type: Type.CHANGE_INPUT,
        payload: payload,
      });

      export const clear = (): Types.Clear => ({
        type: Type.CLEAR
      });
    }
  }

  export namespace State
  {
    import Actions = ProjectProfile_State.Actions;

    export interface IState
    {
      project: Project;
    }

    export const init: IState = {
      project: {
        ...new Project(),
      },
    };

    export const Reducer = (state: IState = init, action: Actions.Types.Actions): IState =>
    {
      switch (action.type)
      {
        case Actions.Type.GET_BY_ID:
          return {
            ...state,
            project: action.payload
          };
        case Actions.Type.CHANGE_INPUT:
          const value = action.payload.value;
          const name = action.payload.name;

          const oldProject = {...state.project};
          oldProject[name] = value;

          return {
            ...state,
            project: oldProject
            // project: {
            //   ...state.project,
            //   [name]: value
            // }
          };
        case Actions.Type.CLEAR:
          return init;
        default:
          return state;
      }
    };
  }

  export namespace Thunks
  {
    export const getById = (id: number): any => (dispatch: Dispatch) =>
    {
      ProjectService.getById(id).then(project =>
      {
        dispatch(Page_State.Thunks.changeTitle('Projects / ' + project.name));
        dispatch(Actions.Of.getByIdAction(project));
      });
    };

    export const change = (project: Project): any => () =>
    {
      console.log(project);
      ProjectService.change(project).then(bool =>
      {

      });
    };
  }
}