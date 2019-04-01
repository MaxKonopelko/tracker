import * as React from 'react';
import { ReactNode } from 'react';
import { DashboardComponent } from './content/dashboard.Component';
import { ReportsComponent } from './content/reports.Component';
import { HelpComponent } from './content/helpComponent';
import { TimerComponent } from './content/timerComponent';
import { MenuType } from './menu.Сomponent';
import { Route } from 'react-router';

interface IState
{
  indexMenu: number;
}

export class ContentComponent extends React.Component<{}, IState>
{
  constructor(props: {})
  {
    super(props);

    this.state = {
      indexMenu: 0,
    };
  }

  public selectMenu(indexMenu: number): void
  {
    this.setState({
      indexMenu: indexMenu
    });
  }

  public render(): ReactNode
  {
    const content = () =>
    {
      switch (this.state.indexMenu)
      {
        case MenuType.DashboardComponent:
          return <Route path="/main/dashboard" component={DashboardComponent}/>;
        case MenuType.ReportsComponent:
          return <Route path="/main/timer" component={DashboardComponent}/>;
        case MenuType.TimerComponent:
          return <TimerComponent/>;
        case MenuType.HelpComponent:
          return <HelpComponent/>;
        default:
          return null;
      }
    };

    return (
      content()
    );
  }
}