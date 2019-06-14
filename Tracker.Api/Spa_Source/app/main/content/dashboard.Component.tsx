import { default as React, ReactNode } from 'react';
import { connect } from 'react-redux';
import { ConnectedProps } from '../../../store/types';
import { Page } from '../../../routes/page';
import { Page_State } from '../../../store/actions/page';

function sum1(value: number): Promise<number>
{
  return new Promise(resolve =>
  {
    setTimeout(() =>
    {
      resolve(value * 2);
    }, 2000);
  });
}

function sum2(value: number): Promise<number>
{
  return new Promise((resolve, reject) =>
  {
    setTimeout(() =>
    {
      reject('zxczxc');
      //resolve(value * 3);
    }, 3000);
  });
}

function sum3(value: number): Promise<number>
{
  return new Promise(resolve =>
  {
    setTimeout(() =>
    {
      resolve(value * 2);
    }, 4000);
  });
}

type IProps = ConnectedProps;

export class DashboardComponent extends React.Component<IProps>
{
  constructor(props: IProps)
  {
    super(props);

    this.props.dispatch(Page_State.Thunks.changeTitle(Page.Dashboard.title));

    // sum1(3).then(res1 =>
    // {
    //   console.log('res1', res1);
    //   sum2(res1).then(res2 =>
    //   {
    //     console.log('res2', res2);
    //     sum3(res2).then(res3 =>
    //     {
    //       console.log('res3', res3);
    //     });
    //   });
    // });

    // sum1(3)
    //   .then(res1 =>
    //   {
    //     console.log('res1', res1);
    //     return sum2(res1);
    //   })
    //   .then(res2 =>
    //   {
    //     console.log('res2', res2);
    //     return sum3(res2);
    //   })
    //   .then(res3 =>
    //   {
    //     console.log('res3', res3);
    //   });

    //Start async function
    this.test();
  }

  private async test(): Promise<any>
  {
    try
    {
      const res1 = await sum1(2);
      console.log('res1', res1);

      const res2 = await sum2(res1);
      console.log('res2', res2);

      const res3 = await sum3(res2);
      console.log('res3', res3);
    }
    catch (e)
    {
      console.log('EEE', e);
    }

    return 4;
  }

  public render(): ReactNode
  {
    const Ttt = withSubscription(DashboardComponent);
    return (
      <>
        <div>DashboardComponent</div>
        <Ttt/>
      </>
    );
  }
}

function withSubscription(WrappedComponent: any): any
{
  return class extends React.Component
  {
    public render(): ReactNode
    {
      return (
        <>
          <div>
            <h1>Test</h1>
            <WrappedComponent/>
          </div>
        </>
      );
    }
  };
}

export const DashboardComponent_Connect = connect(null)(DashboardComponent);
