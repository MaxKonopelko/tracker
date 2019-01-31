import * as React from 'react';
import { ReactNode } from 'react';

export class ServicesComponent extends React.Component
{
  public render(): ReactNode
  {
    console.warn('Services');

    return (
      <div className="Services">Services</div>
    );
  }
}