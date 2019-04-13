import * as React from 'react';
import { RegisterComponent } from '../app/auth/register.Сomponent';
import { LoginComponent } from '../app/auth/login.Сomponent';
import { Redirect, Route, Switch } from 'react-router';
import { HelpComponent_Connect } from '../app/main/content/help.Component';
import { DashboardComponent_Connect } from '../app/main/content/dashboard.Component';
import { TimerComponent_Connect } from '../app/main/content/timer.Component';
import { ReportsComponent_Connect } from '../app/main/content/reports.Component';
import { ProjectsComponent_Connect } from '../app/main/content/projects.Component';
import { ClientsComponent_Connect } from '../app/main/content/clients.Component';
import { AuthComponent } from '../app/auth/auth.Сomponent';
import { MainComponent } from '../app/main/main.Сomponent';
import { PrivateRoute } from './private.routes';
import { UsersComponent_Connect } from '../app/main/content/users.Component';
import { TeamComponent_Connect } from '../app/main/content/team.Component';
import { Auth, Main, Page } from './page';

export const AppRoutes = () => (
  <Switch>
    <Redirect exact from="" to="/main"/>
    <Route path={Main.Auth.route} component={AuthComponent}/>
    <PrivateRoute path={Main.Main.route} component={MainComponent}/>
  </Switch>
);

export const AuthRoutes = () => (
  <Switch>
    <Route path={Auth.Login.route} component={LoginComponent}/>
    <Route path={Auth.Register.route} component={RegisterComponent}/>
  </Switch>
);

export const MainRoutes = () => (
  <Switch>
    <Redirect exact from="/main" to="/main/dashboard"/>
    <Route path={Page.Dashboard.route} component={DashboardComponent_Connect}/>
    <Route path={Page.Timer.route} component={TimerComponent_Connect}/>
    <Route path={Page.Reports.route} component={ReportsComponent_Connect}/>
    <Route path={Page.Users.route} component={UsersComponent_Connect}/>
    <Route path={Page.Projects.route} component={ProjectsComponent_Connect}/>
    <Route path={Page.Clients.route} component={ClientsComponent_Connect}/>
    <Route path={Page.Team.route} component={TeamComponent_Connect}/>
    <Route path={Page.Help.route} component={HelpComponent_Connect}/>
  </Switch>
);