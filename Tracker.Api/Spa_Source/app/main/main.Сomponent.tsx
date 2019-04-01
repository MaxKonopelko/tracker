import { default as React, ReactNode } from 'react';
import { ContentComponent } from './content.Component';
import { MenuType } from './menu.Сomponent';
import { HeaderComponent } from './header.Component';
import { MenuTestComponent } from './content/menuTest.Component';
import { Routes2 } from '../../routes/routes';

interface IState
{
  text: string;
}

export class MainOmponent extends React.Component<{}, IState>
{
  private refContentComponent: ContentComponent;

  constructor(props: {})
  {
    super(props);
  }

  public onSelectMenu = (value: MenuType) =>
  {
    this.refContentComponent.selectMenu(value);
  };

  public render(): ReactNode
  {
    return (
      <>
        <HeaderComponent/>
        <MenuTestComponent/>
        <div id="main">
          <form action="#">
            {/*<ContentComponent ref={el => this.refContentComponent = el}/>*/}
            <Routes2/>
          </form>
          {/*<MenuComponent onSelectMenu={this.onSelectMenu}/>*/}
        </div>
      </>);
  }
}