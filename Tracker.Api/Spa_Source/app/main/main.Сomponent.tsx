import { default as React, ReactNode } from 'react';
import { HeaderComponent } from './header.Component';
import { MenuComponent } from './menu.Component';
import { MainRoutes } from '../../routes/authRoutes';

export class MainComponent extends React.Component
{
  public render(): ReactNode
  {
    return (
      <>
        <HeaderComponent/>
        <MenuComponent/>
        <div id="main">
          <MainRoutes/>
        </div>
      </>
    );
  }
}