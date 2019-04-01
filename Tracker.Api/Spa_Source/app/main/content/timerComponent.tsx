import * as React from 'react';
import { ReactNode } from 'react';

export class TimerComponent extends React.Component<{}>
{
  constructor(props: {})
  {
    super(props);
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