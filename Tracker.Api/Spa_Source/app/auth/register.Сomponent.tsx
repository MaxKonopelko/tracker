import * as React from 'react';
import { ReactNode } from 'react';
import { IUser } from '../../models/models';
import { RegistrationService } from '../../services/registration.service';
import { Growl } from '../../libreris/growl';
import { Patterns } from '../../controls/controls';
import { Link } from 'react-router-dom';

interface IProps
{
  goToAuthComponent?: () => void;
}

interface IState
{
  name: string;
  email: string;
  password: string;
  pattern?: string;
}

export class RegisterComponent extends React.Component<IProps, IState>
{
  constructor(props: IProps)
  {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      pattern: Patterns.Email,
    };
  }

  private registerUser(user: IUser): void
  {

    RegistrationService.add(user).then(bool =>
    {
      if (!bool)
      {
        Growl.error('This email is already registered.');
      }
      else
      {
        Growl.notice('You have successfully registered');
      }
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

    const user: IUser = {
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
    };

    this.registerUser(user);
  };

  public render(): ReactNode
  {
    return (
      <div className="auth-form">
        <form className="auth-form-content" onSubmit={this.handleSubmit}>
          <div className="container">
            <h1>Sign Up</h1>
            <hr/>
            <label htmlFor="name">Username</label>
            <input type="text" name="name" onChange={this.onChange} value={this.state.name} placeholder="Enter Username" required/>

            <label htmlFor="email">Email</label>
            <input type="text" name="email" onChange={this.onChange} value={this.state.email} placeholder="Enter Email" required pattern={this.state.pattern}/>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={this.onChange} value={this.state.password} placeholder="Enter Password" required/>

            {/*<label htmlFor="psw-repeat"><b>Repeat Password</b></label>*/}
            {/*<input type="password" placeholder="Repeat Password" name="psw-repeat"/>*/}
            {/*<label>*/}
            {/*<input type="checkbox" name="remember" style={{marginBottom: '15px'}}/> Remember me*/}
            {/*</label>*/}

            <div className="clearfix">
              <button type="submit" className="signupbtn">Sign Up</button>
              <Link to="/auth/login">
                <button id="button-red" type="text" className="signupbtn">Go to Login</button>
              </Link>
            </div>
          </div>
        </form>
      </div>);
  }
}