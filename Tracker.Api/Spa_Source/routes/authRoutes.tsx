import * as React from 'react';
import { RegisterComponent } from '../app/auth/register.Сomponent';
import { LoginComponent } from '../app/auth/login.Сomponent';
import { Redirect, Route, Switch } from 'react-router';
import { HelpComponent } from '../app/main/content/help.Component';
import { DashboardComponent } from '../app/main/content/dashboard.Component';
import { TimerComponent } from '../app/main/content/timer.Component';
import { ReportsComponent } from '../app/main/content/reports.Component';
import { ProjectsComponent, ProjectsComponent_Connect } from '../app/main/content/projects.Component';
import { ClientsComponent } from '../app/main/content/clients.Component';
import { AuthComponent } from '../app/auth/auth.Сomponent';
import { MainComponent } from '../app/main/main.Сomponent';
import { PrivateRoute } from './private.routes';
import { UsersComponent } from '../app/main/content/users.Component';
import { TeamComponent_Connect } from '../app/main/content/team.Component';

export const AppRoutes = () => (
  <Switch>
    <Redirect exact from="" to="/main"/>
    <Route path="/auth" component={AuthComponent}/>
    <PrivateRoute path="/main" component={MainComponent}/>
  </Switch>
);

export const AuthRoutes = () => (
  <Switch>
    <Route path="/auth/login" component={LoginComponent}/>
    <Route path="/auth/register" component={RegisterComponent}/>
  </Switch>
);

export const MainRoutes = () => (
  <Switch>
    <Redirect exact from="/main" to="/main/dashboard"/>
    <Route path="/main/dashboard" component={DashboardComponent}/>
    <Route path="/main/timer" component={TimerComponent}/>
    <Route path="/main/reports" component={ReportsComponent}/>
    <Route path="/main/users" component={UsersComponent}/>
    <Route path="/main/projects" component={ProjectsComponent_Connect}/>
    <Route path="/main/clients" component={ClientsComponent}/>
    <Route path="/main/team" component={TeamComponent_Connect}/>
    <Route path="/main/help" component={HelpComponent}/>
  </Switch>
);