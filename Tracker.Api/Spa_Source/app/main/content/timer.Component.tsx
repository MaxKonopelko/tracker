import * as React from 'react';
import { ReactNode } from 'react';
import { connect } from 'react-redux';
import { ConnectedProps } from '../../../store/types';
import { Page } from '../../../routes/page';
import { Page_State } from '../../../store/actions/page';

type IProps = ConnectedProps;

export class TimerComponent extends React.Component<IProps>
{
  constructor(props: IProps)
  {
    super(props);

    this.props.dispatch(Page_State.Thunks.changeTitle(Page.Timer.title));
  }

  public render(): ReactNode
  {
    return (
      <>
        <div className="container-white">
          <table>
            <tbody>
            <tr>
              <th>Date</th>
              <th>Day</th>
              <th>Task</th>
              <th className="cell-center">Project</th>
              <th>Time</th>
              <th>Control</th>
            </tr>
            <tr>
              <td>14/02/18</td>
              <td>Today</td>
              <td>First</td>
              <td className="cell-center">Tracker</td>
              <td>00:00</td>
              <td>
                <ul className="list-actions">
                  <li>
                    <img src="/images/iconfinder-icon (8).svg" width="42" height="42" alt="timer"/>
                  </li>
                </ul>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export const TimerComponent_Connect = connect(null)(TimerComponent);
