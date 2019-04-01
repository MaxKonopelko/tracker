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

export class ModalClientsComponent extends React.Component<IProps, IState>
{
  private modal: ModalComponent;

  constructor(props: IProps)
  {
    super(props);

    this.state = {
      clients: [],
      client: {
        ...new Client(),
        address: '',
        family: '',
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
        <form action="#">
          {/*<strong className="modal-title">Cancel In Transit Delivery?</strong>*/}
          <div className="content-modal">

            <div className="row foo-col">
              <div className="col">
                <div className="box-panel">
                  <strong className="head-panel">Name</strong>
                  <input type="text" name="family" value={this.state.client.family} onChange={this.onChange} placeholder={'Name'}/>
                </div>
              </div>
              <div className="col">
                <div className="box-panel">
                  <strong className="head-panel">Country</strong>
                  <input type="text" name="country" value={this.state.client.country} onChange={this.onChange} placeholder={'Country'}/>
                </div>
              </div>

              <div className="col">
                <div className="box-panel">
                  <strong className="head-panel">Address</strong>
                  <input type="text" name="address" value={this.state.client.address} onChange={this.onChange} placeholder={'Address'}/>
                </div>
              </div>
              <div className="col">
                <div className="box-panel">
                  <strong className="head-panel">City</strong>
                  <input type="text" name="city" value={this.state.client.city} onChange={this.onChange} placeholder={'City'}/>
                </div>
              </div>
            </div>
          </div>
        </form>
      </ModalComponent>
    );
  }
}