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
  confirmpassword?: string;
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
      confirmpassword: '',
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
      console.log('prevState', prevState);
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
      <div className="container-login">
        <form action="#" onSubmit={this.handleSubmit}>
          <div className="extra-top">
            <strong className="logo"><a href="/">Toys for tots</a></strong>
            <strong className="title">Please register</strong>
          </div>
          <div className="extra-center">
            <label className="label-form" htmlFor="field-mail">Username</label>
            <input type="text" name="name" value={this.state.name} onChange={this.onChange} id="field-name"/>
            <label className="label-form" htmlFor="field-mail">Email</label>
            <input type="text" name="email" value={this.state.email} onChange={this.onChange} id="field-mail"/>
            <label className="label-form" htmlFor="password">Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.onChange} id="password"/>
            <label className="label-form" htmlFor="confirm-password">Confirm Password</label>
            <input type="password" name="confirmpassword" value={this.state.confirmpassword} onChange={this.onChange} id="confirm-password"/>
            <div className="hold-btn">
              <button className="btn" type="submit">Sign in to Dashboard</button>
            </div>
          </div>
          <div className="extra-bottom">
            <Link className="help-link" to="/auth/login">
              Login
            </Link>
            <a className="help-link" href="#">Forgot Password?</a>
          </div>
        </form>
      </div>);
  }
}

{/*<div className="auth-form">*/
}
{/*<form className="auth-form-content" onSubmit={this.handleSubmit}>*/
}
{/*<div className="container">*/
}
{/*<h1>Sign Up</h1>*/
}
{/*<hr/>*/
}
{/*<label htmlFor="name">Username</label>*/
}
{/*<input type="text" name="name" onChange={this.onChange} value={this.state.name} placeholder="Enter Username" required/>*/
}

{/*<label htmlFor="email">Email</label>*/
}
{/*<input type="text" name="email" onChange={this.onChange} value={this.state.email} placeholder="Enter Email" required pattern={this.state.pattern}/>*/
}

{/*<label htmlFor="password">Password</label>*/
}
{/*<input type="password" name="password" onChange={this.onChange} value={this.state.password} placeholder="Enter Password" required/>*/
}
{/*<div className="clearfix">*/
}
{/*<button type="submit" className="signupbtn">Sign Up</button>*/
}
{/*<Link to="/auth/login">*/
}
{/*<button id="button-red" type="text" className="signupbtn">Go to Login</button>*/
}
{/*</Link>*/
}
{/*</div>*/
}
{/*</div>*/
}
{/*</form>*/
}
{/*</div>);*/
}