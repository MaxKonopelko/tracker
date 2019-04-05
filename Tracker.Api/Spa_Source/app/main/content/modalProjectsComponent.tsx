import { default as React, ReactNode } from 'react';
import { Project } from '../../../models/models';
import { ModalComponent } from '../../../modal/modal.Component';
import { ProjectService } from '../../../services/project.service';
import { Dropdown } from 'react-bootstrap';

interface IProps
{
  displayProjects: () => void;
  modalToShow: () => void;
  projects: Project[];
}

interface IState
{
  project: Project;
}

export class ModalProjectsComponent extends React.Component<IProps, IState>
{
  private modal: ModalComponent;

  constructor(props: IProps)
  {
    super(props);

    this.state = {
      project: {
        ...new Project(),
        name: '',
        status: '',
        description: '',
        actions: '',
        budget: ''
      }
    };
  }

//✅
  private handleSubmit = () =>
  {
    this.addProject(this.state.project);
  };

  private addProject(clientModel: Project): void
  {
    ProjectService.add(clientModel).then(res =>
    {
      this.props.displayProjects();
      this.modal.onClose();
    });
  }

  public onChange = (event: React.FormEvent<HTMLInputElement>) =>
  {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;

    this.setState(prevState =>
    {
      prevState.project[name] = value;
      return prevState;
    });
  };

  public onSelect = (eventKey: any, event: Object) =>
  {
    console.log('event key', eventKey);
    console.log('event', event);
  };

  public render(): ReactNode
  {
    return (
      <ModalComponent ref={el => this.modal = el} handleSubmit={this.handleSubmit} onModal={this.props.modalToShow}>
        <div>

          <div className="row wrap-row">
            <div className="col">
              <div className="hold">
                <h2>Project Information</h2>

                <div className="row">
                  <div className="col">
                    <label className="label-form">Name</label>
                    <input type="text" name="name" value={this.state.project.name} onChange={this.onChange}/>
                  </div>
                  <div className="col">
                    <label className="label-form">Budget $</label>
                    <input type="text" name="budget" value={this.state.project.budget} onChange={this.onChange}/>
                  </div>

                  <div className="col">
                    <label className="label-form">Clients</label>
                    <Dropdown onSelect={this.onSelect}>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Clients
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {
                          this.props.projects.map(row =>
                            <Dropdown.Item eventKey={row.id} key={row.id}>{row.name}</Dropdown.Item>
                          )
                        }
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                </div>
                <label className="label-form">Description</label>
                <input type="text" name="description" value={this.state.project.description} onChange={this.onChange}/>
                <div className="row">
                  <div className="col col-middle">
                    <label className="label-form">Status</label>
                    <input type="text" name="status" value={this.state.project.status} onChange={this.onChange}/>
                  </div>
                  <div className="col col-small">
                    <label className="label-form">Actions</label>
                    <input type="text" name="actions" value={this.state.project.actions} onChange={this.onChange}/>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalComponent>
    );
  }
}