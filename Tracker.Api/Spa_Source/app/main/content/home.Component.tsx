import { default as React, ReactNode } from 'react';

export class HomeComponent extends React.Component
{
  public render(): ReactNode
  {
    console.warn('Menu[index]');

    return (
      <div className="home">Home</div>
    );
  }
}