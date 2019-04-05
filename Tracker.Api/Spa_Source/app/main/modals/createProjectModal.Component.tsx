import { default as React, ReactNode } from 'react';
import { Client, Project } from '../../../models/models';
import { ModalComponent } from '../../../modal/modal.Component';
import { ProjectService } from '../../../services/project.service';
import { Dropdown } from 'react-bootstrap';
import { ClientService } from '../../../services/client.service';

interface IProps
{
  displayProjects: () => void;
  modalToShow: () => void;
}

interface IState
{
  project: Project;
  clients: Client[];
  dropdownTitle: string;
}

export class CreateProjectModalComponent extends React.Component<IProps, IState>
{
  private modal: ModalComponent;

  constructor(props: IProps)
  {
    super(props);

    this.state = {
      project: {
        ...new Project(),
        name: '',
        status: 'Active',
        description: '',
        actions: '',
        budget: '',
        clientId: null,
      },
      clients: [],
      dropdownTitle: 'Select Client'
    };
  }

//✅
  private handleSubmit = () =>
  {
    this.addProject(this.state.project);
  };

  private addProject(projectModel: Project): void
  {
    ProjectService.add(projectModel).then(res =>
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

  public onSelect = (eventKey: string) =>
  {
    const key = parseInt(eventKey);
    const clientName: string = this.state.clients.find(x => x.id === key).name;

    this.setState({
      project: {
        ...this.state.project,
        clientId: key
      },
      dropdownTitle: clientName
    });
  };

  public componentDidMount(): void
  {
    this.getClients();
  }

  public getClients(): void
  {
    ClientService.get().then(clients =>
    {
      this.setState({
        clients: clients
      });
    });
  }

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
                        {this.state.dropdownTitle}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {
                          this.state.clients.map(client =>
                            <Dropdown.Item key={client.id} eventKey={client.id}>{client.name}</Dropdown.Item>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalComponent>
    );
  }
}