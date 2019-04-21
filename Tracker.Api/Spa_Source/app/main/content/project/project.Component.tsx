import { default as React, ReactNode } from 'react';
import { Project } from '../../../../models/models';
import { connect } from 'react-redux';
import { ConnectedProps } from '../../../../store/types';
import { IAppState } from '../../../../store/state';
import { ProjectProfile_State } from '../../../../store/actions/projectProfile';
import { tableColumnsUsersProfile } from '../../../../models/table-maps';

interface IStateProps
{
  project: Project;
}

type IProps = ConnectedProps<IStateProps>;

export class ProjectComponent extends React.Component<IProps>
{
  constructor(props: IProps)
  {
    super(props);
  }

  public componentDidMount(): void
  {
    this.refreshTable();
  }

  public refreshTable = () =>
  {
    const id: number = this.props['match'].params.id;
    this.props.dispatch(ProjectProfile_State.Thunks.getById(id));
  };

  public componentWillUnmount(): void
  {
    this.props.dispatch(ProjectProfile_State.Actions.Of.clear());
  }

  // const id = this.props['match'].params.id;
  // ProjectService.getById(id).then(project =>
  // {
  //   this.props.dispatch(Page_State.Thunks.changeTitle(this.props.project.name));
  // });

  //this.props.dispatch({type: '[PROJECT_PROFILE] CHANGE_PROJECT', payload: project});

  public onChangeInput = (event: React.FormEvent<HTMLInputElement>) =>
  {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;

    this.props.dispatch(ProjectProfile_State.Actions.Of.changeInputAction({name, value}));
  };

  public onChangeProfile = () =>
  {
    this.props.dispatch(ProjectProfile_State.Thunks.change(this.props.project));
  };

  public render(): ReactNode
  {
    const date = this.props.project.createdDate;
    const createdDate = date != null ? new Date(date).toString() : null;

    return <>
      <div className="container-white">
        <div className="container-form">
          <div className="row">
            <div className="col-sm">
              <h4>Profile Information</h4>
              <div className="row">
                <div className="col-sm">
                  <p>Name Project</p>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" name="name" onChange={this.onChangeInput} defaultValue={this.props.project.name} aria-describedby="basic-addon2"/>
                  </div>
                </div>
                <div className="col-sm">
                  <p>Budget</p>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" name="budget" onChange={this.onChangeInput} defaultValue={this.props.project.budget} aria-describedby="basic-addon2"/>
                  </div>
                </div>
                <div className="col-sm">
                  <p>Client Name</p>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" name="client" onChange={this.onChangeInput} defaultValue={this.props.project.client}/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <p>Description</p>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" name="description" onChange={this.onChangeInput} defaultValue={this.props.project.description}/>
                  </div>
                </div>
                <div className="col-sm">
                  <p>Status</p>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" name="status" onChange={this.onChangeInput} defaultValue={this.props.project.status}/>
                  </div>
                </div>
              </div>
              <div className="row">

                <div className="col-sm">
                  <p>Created Date</p>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" name="createdDate" readOnly defaultValue={createdDate}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <h4>Users</h4>
              <div className="input-group mb-3">
                <table>
                  <tbody>
                  <tr>
                    {
                      tableColumnsUsersProfile.map(column =>
                        <th key={column.key}>{column.label}</th>
                      )
                    }
                  </tr>
                  {
                    this.props.project.users.map(user =>
                    {
                      return <tr key={user.id}>
                        {
                          tableColumnsUsersProfile.map(column =>
                            {
                              return <td key={user.id + column.key}>{user[column.key]}</td>;
                            }
                          )
                        }
                      </tr>;
                    })
                  }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-sm">-
              <div className="float-right">
                <button type="button" className="btn btn-success btn-" onClick={this.onChangeProfile}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
  }
}

const mapStateToProps = (state: IAppState): IStateProps => ({
  project: state.projectProfile.project
});

export const ProjectComponent_Connect = connect(mapStateToProps)(ProjectComponent);
