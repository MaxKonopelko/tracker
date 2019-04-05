import { default as React, ReactNode } from 'react';
import { ModalComponent } from '../../../modal/modal.Component';
import { Client } from '../../../models/models';
import { ClientService } from '../../../services/client.service';

interface IProps
{
  getClients: () => void;
  modalToShow: () => void;
}

interface IState
{
  clients: Client[];
  client: Client;
}

export class CreateClientsModalComponent extends React.Component<IProps, IState>
{
  private modal: ModalComponent;

  constructor(props: IProps)
  {
    super(props);

    this.state = {
      clients: [],
      client: {
        ...new Client(),
        name: '',
        city: '',
        country: '',
      }
    };
  }

  private handleSubmit = () =>
  {
    this.addClient(this.state.client);
  };

  private addClient(clientModel: Client): void
  {
    ClientService.add(clientModel).then(res =>
    {
      this.props.getClients();
      this.modal.onClose();
    });
  }

  public onChange = (event: React.FormEvent<HTMLInputElement>) =>
  {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;

    this.setState(prevState =>
    {
      prevState.client[name] = value;
      return prevState;
    });
  };

  public render(): ReactNode
  {
    return (
      <ModalComponent ref={el => this.modal = el} handleSubmit={this.handleSubmit} onModal={this.props.modalToShow}>
        <div>
          {/*<strong className="modal-title">Cancel In Transit Delivery?</strong>*/}
          <div className="content-modal">

            <div className="col">
                <input type="text" name="name" value={this.state.client.name} onChange={this.onChange} placeholder={'Name'}/>
                <input type="text" name="country" value={this.state.client.country} onChange={this.onChange} placeholder={'Country'}/>
                <input type="text" name="city" value={this.state.client.city} onChange={this.onChange} placeholder={'City'}/>
              </div>
            </div>
        </div>
      </ModalComponent>
    );
  }
}