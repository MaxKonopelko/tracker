import { default as React, ReactNode } from 'react';
import { Client } from '../../../models/models';
import { TableComponent } from '../../../controls/table/table.Component';
import { tableColumnsClients } from '../../../models/table-maps';
import { ModalClientsComponent } from './modalClientsComponent';
import { ClientService } from '../../../services/client.service';

interface IState
{
  clients: Client[];
  isShow: boolean;
}

export class ClientsComponent extends React.Component<{}, IState>
{
  constructor(props: {})
  {
    super(props);

    this.state = {
      clients: [],
      isShow: false,
    };

    this.refreshTable = this.refreshTable.bind(this);
  }

  public componentDidMount(): void
  {
    this.refreshTable();
  }

  public refreshTable(): void
  {
    ClientService.get().then(clients =>
    {
      this.setState({
        clients: clients
      });
    });
  }

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
        <div className="aside-btn">
          <div onClick={() => this.onToggleModal(true)} className="btn">
            <span className="sprites sprites-plus"/>New Client
          </div>
        </div>
        <TableComponent rows={this.state.clients} columns={tableColumnsClients}/>
        {
          this.state.isShow && (
            <ModalClientsComponent getClients={this.refreshTable} modalToShow={() => this.onToggleModal(false)}/>
          )
        }
      </>
    );
  }
}
