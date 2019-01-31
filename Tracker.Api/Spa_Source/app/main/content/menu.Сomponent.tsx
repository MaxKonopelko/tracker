import { ReactNode } from 'react';
import * as React from 'react';

// const testEnum = {
//   Bla1: 0,
//   Bla2: 1
// };
//
// enum TestEnum1
// {
//   Bla1,
//   Bla2
// }
//
// console.log('1', testEnum.Bla1);
// console.log('2', TestEnum1.Bla1);
//
// function f(test: TestEnum1): void
// {
//   console.log('F', test);
// }

export enum MenuType
{
  HomeComponent,
  ServicesComponent,
  AboutusComponent,
  ContactsComponent,
}

interface IMenu
{
  name: string;
  key: number;
}

interface IProps
{
  onSelectMenu: (value: number) => void;
}

interface IState
{
  activeIndex: number;
}

export class MenuComponent extends React.Component<IProps, IState>
{
  public menu: IMenu[] = [
    {
      name: 'Home',
      key: MenuType.HomeComponent
    },
    {
      name: 'Services',
      key: MenuType.ServicesComponent
    },
    {
      name: 'About us',
      key: MenuType.AboutusComponent
    },
    {
      name: 'Contacts',
      key: MenuType.ContactsComponent
    }
  ];

  constructor(props: IProps)
  {
    super(props);

    this.state = {
      activeIndex: 0,
    };
  }

  public onActivateMenu = (index: MenuType) =>
  {
    this.setState({
      activeIndex: index
    });

    this.props.onSelectMenu(index);
  };

  public addClass(index: number): string
  {
    if (index === this.state.activeIndex)
    {
      switch (this.state.activeIndex)
      {
        case MenuType.HomeComponent:
          return 'home';
        case MenuType.ServicesComponent:
          return 'services';
        case MenuType.AboutusComponent:
          return 'about_us';
        case MenuType.ContactsComponent:
          return 'contacts';
        default:
          return '';
      }
    }
    return '';
  }

  public render(): ReactNode
  {
    return (
      <div className="menu">
        <ul className="">
          {
            this.menu.map((value, index) =>
            {
              const style = index === this.state.activeIndex ? 'newSpan ' : '';
              const styleIcon = this.addClass(index);

              return (
                <li key={value.key} onClick={() => this.onActivateMenu(value.key)} className={'menu-li ' + style + styleIcon}>
                  <span className="">
                    {value.name}
                  </span>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}