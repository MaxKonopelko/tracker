import * as React from 'react';
import { ReactNode } from 'react';
import { AppRoutes } from '../routes/authRoutes';

export class AppComponent extends React.Component
{
  public render(): ReactNode
  {
    return (
      <AppRoutes/>
    );
  }
}