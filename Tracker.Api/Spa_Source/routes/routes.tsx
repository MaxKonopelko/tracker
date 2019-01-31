import * as React from 'react';
import { RegisterComponent } from '../app/auth/register.Сomponent';
import { LoginComponent } from '../app/auth/login.Сomponent';
import { Route, Switch } from 'react-router';

export const Routes = () => (
  <Switch>
    <Route path="/auth/login" component={LoginComponent}/>
    <Route path="/auth/register" component={RegisterComponent}/>
  </Switch>
);
