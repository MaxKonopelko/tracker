import { default as React, ReactNode } from 'react';
import { Client } from '../../../models/models';
import { TableComponent } from '../../../controls/table/table.Component';
import { tableColumnsClients } from '../../../models/table-maps';
import { CreateClientsModalComponent } from '../modals/createClientsModal.Component';
import { ClientService } from '../../../services/client.service';
import { connect } from 'react-redux';
import { ConnectedProps } from '../../../store/types';
import { Page } from '../../../routes/page';
import { Page_State } from '../../../store/actions/page';

interface IState
{
  clients: Client[];
  isShow: boolean;
}

type IProps = ConnectedProps;

export class ClientsComponent extends React.PureComponent<IProps, IState>
{
  constructor(props: IProps)
  {
    super(props);

    this.state = {
      clients: [],
      isShow: false,
    };

    this.props.dispatch(Page_State.Thunks.changeTitle(Page.Clients.title));
    //Page_State.Thunks.test(this.props.dispatch, Page.Clients.title);

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
            <CreateClientsModalComponent getClients={this.refreshTable} modalToShow={() => this.onToggleModal(false)}/>
          )
        }
      </>
    );
  }
}

export const ClientsComponent_Connect = connect(null)(ClientsComponent);
