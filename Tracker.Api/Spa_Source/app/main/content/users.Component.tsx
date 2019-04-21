import { default as React } from 'react';
import { TableComponent } from '../../../controls/table/table.Component';
import { UsersService } from '../../../services/users.service';
import { tableColumnsUsers } from '../../../models/table-maps';
import { User } from '../../../models/models';
import { connect } from 'react-redux';
import { ConnectedProps } from '../../../store/types';
import { Page } from '../../../routes/page';
import { Page_State } from '../../../store/actions/page';

interface IState
{
  users: User[];
  isShow: boolean;
}

type IProps = ConnectedProps;

export class UsersComponent extends React.Component<IProps, IState>
{
  constructor(props: IProps)
  {
    super(props);

    this.state = {
      users: [],
      isShow: false,
    };

    this.props.dispatch(Page_State.Thunks.changeTitle(Page.Users.title));
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

export const UsersComponent_Connect = connect(null)(UsersComponent);
