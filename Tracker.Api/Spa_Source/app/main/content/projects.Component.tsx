import { default as React, ReactNode } from 'react';
import { Project } from '../../../models/models';
import { ProjectService } from '../../../services/project.service';
import { tableColumnsProjects } from '../../../models/table-maps';
import { TableComponent } from '../../../controls/table/table.Component';
import { CreateProjectModalComponent } from '../modals/createProjectModal.Component';
import { connect } from 'react-redux';
import { IAppState } from '../../../store/state';
import { Page_State } from '../../../store/actions/page';

interface IState
{
  projects: Project[];
  isShow: boolean;
}

interface IStateProps
{
  page: Page_State.State.IState;
}

export class ProjectsComponent extends React.Component<{}, IState>
{
  constructor(props: {})
  {
    super(props);

    this.state = {
      projects: [],
      isShow: false
    };
  }

  public componentDidMount(): void
  {
    this.refreshTable();
  }

  public refreshTable = () =>
  {
    ProjectService.get().then(projects =>
    {
      this.setState({
        projects: projects
      });
    });
  };

  public onToggleModal = (bool: boolean) =>
  {
    this.setState({
      isShow: bool
    });
  };

  public render(): ReactNode
  {
    return (
      <>
        <div onClick={() => this.onToggleModal(true)} className="aside-btn">
          <div className="btn">
            <span className="sprites sprites-plus"/>New Project
          </div>
        </div>
        <TableComponent rows={this.state.projects} columns={tableColumnsProjects}/>
        {
          this.state.isShow && (
            <CreateProjectModalComponent displayProjects={this.refreshTable} modalToShow={() => this.onToggleModal(false)}/>
          )
        }
      </>
    );
  }
}

const mapStateToProps = (state: IAppState): IStateProps => ({
  page: state.page
});

export const ProjectsComponent_Connect = connect(mapStateToProps)(ProjectsComponent);
