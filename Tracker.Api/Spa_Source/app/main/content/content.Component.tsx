import * as React from 'react';
import { ReactNode } from 'react';
import { HomeComponent } from './home.Component';
import { ServicesComponent } from './services.Component';
import { ContactsComponent } from './contactsComponent';
import { AboutusComponent } from './aboutusComponent';
import { MenuType } from './menu.Сomponent';

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
        case MenuType.HomeComponent:
          return <HomeComponent/>;
        case MenuType.ServicesComponent:
          return <ServicesComponent/>;
        case MenuType.AboutusComponent:
          return <AboutusComponent/>;
        case MenuType.ContactsComponent:
          return <ContactsComponent/>;
        default:
          return null;
      }
    };

    return (
      <div className="content">
        {
          content()
        }
      </div>
    );
  }
}