import { default as React, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

export class MenuComponent extends React.Component
{
  public render(): ReactNode
  {
    return (
      <nav id="nav">
        <div className="nav-inner">
          <div className="hold-logo"><strong className="logo"><a href="#">Toys for tots</a></strong></div>
          <ul className="menu">

            <li><NavLink to="/main/dashboard" activeClassName="active">
                        <span className="menu-icon">
                            <img src="/images/growth.svg" width="32" height="30" alt="image"/>
                            <span className="inner-icon">
                                <img src="/images/growth%20(1).svg" width="32" height="30" alt="image"/>
                            </span>
                        </span>
              Dashboard</NavLink>
            </li>

            <li><NavLink to="/main/timer" activeClassName="active">
                        <span className="menu-icon">
                             <img src="/images/stopwatch.svg" width="32" height="30" alt="image"/>
                            <span className="inner-icon">
                                <img src="/images/stopwatch%20(1).svg" width="32" height="30" alt="image"/>
                            </span>
                        </span>
              Timer</NavLink>
            </li>
            <li><NavLink to="/main/reports" activeClassName="active">
                        <span className="menu-icon">
                            <img src="/images/report.svg" width="34" height="30" alt="image"/>
                            <span className="inner-icon">
                                <img src="/images/report%20(1).svg" width="34" height="30" alt="image"/>
                            </span>
                            {/*<span className="badge">1</span>*/}
                        </span>
              Reports</NavLink>
            </li>
            <li><NavLink to="/main/projects" activeClassName="active">
                        <span className="menu-icon">
                            <img src="/images/3d.svg" width="28" height="30" alt="image"/>
                            <span className="inner-icon">
                                <img src="/images/3d%20(1).svg" width="28" height="30" alt="image"/>
                            </span>
                        </span>
              Projects</NavLink>
            </li>
            <li><NavLink to="/main/clients" activeClassName="active">
                        <span className="menu-icon">
                            <img src="/images/teamwork%20(2).svg" width="30" height="30" alt="image"/>
                            <span className="inner-icon">
                                <img src="/images/teamwork%20(1).svg" width="30" height="30" alt="image"/>
                            </span>
                        </span>
              Clients</NavLink>
            </li>
            <li><NavLink to="/main/team" activeClassName="active">
                        <span className="menu-icon">
                            <img src="/images/collaboration.svg" width="32" height="32" alt="image"/>
                            <span className="inner-icon">
                                <img src="/images/collaboration%20(1).svg" width="32" height="32" alt="image"/>
                            </span>
                        </span>
              Team</NavLink>
            </li>
            <li><NavLink to="/main/help" activeClassName="active">
                        <span className="menu-icon">
                            <img src="/images/customer-support.svg" width="34" height="32" alt="image"/>
                            <span className="inner-icon">
                                <img src="/images/customer-support%20(1).svg" width="34" height="32" alt="image"/>
                            </span>
                        </span>
              Help</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}