import { default as React, ReactNode } from 'react';
import { ContentComponent } from './content/content.Component';
import { MenuComponent, MenuType } from './content/menu.Сomponent';

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
      <div className="app">
        <div className="container">
          <MenuComponent onSelectMenu={this.onSelectMenu}/>
          <ContentComponent ref={el => this.refContentComponent = el}/>
        </div>
      </div>
    );
  }
}