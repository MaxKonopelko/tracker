import { default as React, ReactNode } from 'react';
import { HeaderComponent_Connect } from './header.Component';
import { MenuComponent } from './menu.Component';
import { MainRoutes } from '../../routes/authRoutes';

export class MainComponent extends React.Component
{
  public render(): ReactNode
  {
    return (
      <>
        <HeaderComponent_Connect/>
        <MenuComponent/>
        <div id="main">
          <MainRoutes/>
        </div>
      </>
    );
  }
}