import * as React from 'react';
import { RegisterComponent } from '../app/auth/register.Сomponent';
import { LoginComponent } from '../app/auth/login.Сomponent';
import { Redirect, Route, Switch } from 'react-router';
import { HelpComponent } from '../app/main/content/helpComponent';
import { DashboardComponent } from '../app/main/content/dashboard.Component';
import { TimerComponent } from '../app/main/content/timerComponent';
import { ReportsComponent } from '../app/main/content/reports.Component';
import { ProjectsComponent } from '../app/main/content/projects.Component';
import { ClientsComponent } from '../app/main/content/clients.Component';
import { TeamComponent } from '../app/main/content/team.Component';
import { AuthOmponent } from '../app/auth/auth.Сomponent';
import { MainOmponent } from '../app/main/main.Сomponent';
import { PrivateRoute } from './private.routes';

export const AppRoutes = () => (
  <Switch>
    <Redirect exact from="" to="/main"/>
    <Route path="/auth" component={AuthOmponent}/>
    <PrivateRoute path="/main" component={MainOmponent}/>
  </Switch>
);

export const Routes = () => (
  <Switch>
    <Route path="/auth/login" component={LoginComponent}/>
    <Route path="/auth/register" component={RegisterComponent}/>
  </Switch>
);

export const Routes2 = () => (
  <Switch>
    <Redirect exact from="/main" to="/main/dashboard"/>
    <Route path="/main/dashboard" component={DashboardComponent}/>
    <Route path="/main/timer" component={TimerComponent}/>
    <Route path="/main/reports" component={ReportsComponent}/>
    <Route path="/main/projects" component={ProjectsComponent}/>
    <Route path="/main/clients" component={ClientsComponent}/>
    <Route path="/main/team" component={TeamComponent}/>
    <Route path="/main/help" component={HelpComponent}/>
  </Switch>
);