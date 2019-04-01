import { default as React, ReactNode } from 'react';
import { Project } from '../../../models/models';
import { ProjectService } from '../../../services/project.service';

interface IState
{
  projects: Project[];
}

export class ProjectsComponent extends React.Component<{}, IState>
{
  constructor(props: {})
  {
    super(props);

    this.state = {
      projects: [],
    };
  }

  public componentDidMount(): void
  {
    ProjectService.get().then(projects =>
    {
      this.setState(
        {
          projects: projects
        }
      );
    });
  }

  public render(): ReactNode
  {
    return (
      <>
        <div className="aside-btn">
          <a href="#" className="btn">
            <span className="sprites sprites-plus">

            </span>New Project
          </a>
        </div>
        <div className="container-white">
          <table>
            <tbody>
            <tr>
              <th>Family Name</th>
              <th>Project</th>
              <th>Street Address</th>
              <th className="cell-center">City & Province</th>
              <th>Time</th>
              <th>Control</th>
            </tr>
            {
              <tr>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                <td className="cell-center">{}</td>
                <td>00:00</td>
                <td>
                  <ul className="list-actions">
                    <li>
                    </li>
                  </ul>
                </td>
              </tr>
            }
            </tbody>
          </table>
        </div>
      </>
    );
  }
}