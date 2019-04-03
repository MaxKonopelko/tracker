import { default as React, ReactNode } from 'react';
import { Project } from '../../../models/models';
import { ModalComponent } from '../../../modal/modal.Component';
import { ProjectService } from '../../../services/project.service';
import Dropdown from 'react-bootstrap/Dropdown';
//import { Dropdown } from 'react-bootstrap';
//import Dropdown from 'react-bootstrap/es/Dropdown';
//import Dropdown from 'react-bootstrap';
// import * as DropdownButton from 'react-bootstrap/lib/DropdownButton';
// import * as DropdownMenu from 'react-bootstrap/lib/DropdownMenu';
// import * as DropdownToggle from 'react-bootstrap/lib/DropdownToggle';

interface IProps
{
  getProjects: () => void;
  modalToShow: () => void;
}

interface IState
{
  projects: Project[];
  project: Project;
}

export class ModalProjectsComponent extends React.Component<IProps, IState>
{
  private modal: ModalComponent;

  constructor(props: IProps)
  {
    super(props);

    this.state = {
      projects: [],
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
      this.props.getProjects();
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

  public Counter = () =>
  {
    return (
      {/*<Dropdown>*/}
        {/*<Dropdown.Toggle variant="success" id="dropdown-basic">*/}
          {/*Dropdown Button*/}
        {/*</Dropdown.Toggle>*/}
        {/*<Dropdown.Menu>*/}
          {/*<Dropdown.Item href="#/action-1">Action</Dropdown.Item>*/}
          {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>*/}
          {/*<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
        {/*</Dropdown.Menu>*/}
      {/*</Dropdown>*/}
    );
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

                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Dropdown Button
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalComponent>
    );
  }
}

