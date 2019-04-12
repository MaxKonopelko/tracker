import { default as React, ReactNode } from 'react';
import { TableComponent } from '../../../controls/table/table.Component';
import { UsersService } from '../../../services/users.service';
import { tableColumnsUsers } from '../../../models/table-maps';
import { Client, User } from '../../../models/models';

interface IState
{
  users: User[];
  isShow: boolean;
}

export class UsersComponent extends React.Component<{}, IState>
{
  constructor(props: {})
  {
    super(props);

    this.state = {
      users: [],
      isShow: false,
    };

    this.refreshTable = this.refreshTable.bind(this);

  }

  public refreshTable(): void
  {
    UsersService.get().then(users =>
    {
      this.setState({
        users: users
      });
    });
  }

  public onToggleModal = (bool: boolean) =>
  {
    this.setState({
      isShow: bool
    });
  };

  public render(): React.ReactNode
  {
    return (
      <>
        <div className="aside-btn">
          <div onClick={() => this.onToggleModal(true)} className="btn">
            <span className="sprites sprites-plus"/>New Client
          </div>
        </div>
        <TableComponent rows={this.state.users} columns={tableColumnsUsers}/>
        {
          this.state.isShow && (
            <div>992</div>)
        }
      </>
    );
  }
}