import { default as React, ReactNode } from 'react';
import { Project } from '../../../../models/models';
import { ProjectService } from '../../../../services/project.service';
import { tableColumnsProjects } from '../../../../models/table-maps';
import { TableComponent } from '../../../../controls/table/table.Component';
import { CreateProjectModalComponent } from '../../modals/createProjectModal.Component';
import { connect } from 'react-redux';
import { Page_State } from '../../../../store/actions/page';
import { Page } from '../../../../routes/page';
import { ConnectedProps } from '../../../../store/types';

interface IState
{
  projects: Project[];
  isShow: boolean;
}

type IProps = ConnectedProps;

export class ProjectsComponent extends React.Component<IProps, IState>
{
  constructor(props: IProps)
  {
    super(props);

    this.state = {
      projects: [],
      isShow: false
    };

    this.props.dispatch(Page_State.Thunks.changeTitle(Page.Projects.title));
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
        <TableComponent page={Page.Project} rows={this.state.projects} columns={tableColumnsProjects}/>
        {
          this.state.isShow && (
            <CreateProjectModalComponent displayProjects={this.refreshTable} modalToShow={() => this.onToggleModal(false)}/>
          )
        }
      </>
    );
  }
}

export const ProjectsComponent_Connect = connect(null)(ProjectsComponent);
