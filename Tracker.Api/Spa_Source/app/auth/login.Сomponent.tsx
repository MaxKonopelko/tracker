import * as React from 'react';
import { ReactNode } from 'react';
import { LoginModel } from '../../models/models';
import { Link, RouteComponentProps } from 'react-router-dom';
import { AuthService } from '../../services/auth.service';

// return new Promise<void>(resolve =>
//   {
//     setTimeout(() =>
//     {
//       console.log('Timer2');
//
//       resolve();
//     }, 4000);

interface IProps extends RouteComponentProps
{
  onSelectClick: () => void;
}

interface IState
{
  email: string;
  password: string;
}

export class LoginComponent extends React.Component<IProps, IState>
{
  constructor(props: IProps)
  {
    super(props);
    console.log('props', props);

    this.state = {
      email: '',
      password: '',
    };
  }

  private loginUser(loginModel: LoginModel): void
  {
    AuthService.auth(loginModel).then(res => {
      console.warn('RES', res);
    });
  }

  private onChange = (event: React.FormEvent<HTMLInputElement>) =>
  {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;

    this.setState(prevState =>
    {
      prevState[name] = value;
      return prevState;
    });
  };

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>
  {
    event.preventDefault();

    const loginModel: LoginModel = {
      email: this.state.email,
      password: this.state.password,
    };

    this.loginUser(loginModel);
  };

  public render(): ReactNode
  {
    return (
      <div className="auth-form">
        <form id="form" className="auth-form-content animate" onSubmit={this.handleSubmit}>
          <div className="container">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="text" onChange={this.onChange} value={this.state.email} placeholder="Enter Email"/>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={this.onChange} value={this.state.password} placeholder="Enter Password"/>

            <button type="submit">Login</button>
            <Link to="/auth/register">
              <button id="button-red" type="submit">Go To Register</button>
            </Link>
          </div>
          <div className="container" style={{backgroundColor: '#f1f1f1'}}/>
        </form>
      </div>
    );
  }
}