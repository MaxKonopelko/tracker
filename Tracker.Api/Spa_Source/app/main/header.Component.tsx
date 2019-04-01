import { default as React, ReactNode } from 'react';
//iconfinder_bear_russian_animal.svg
export class HeaderComponent extends React.Component
{
  public render(): ReactNode
  {
    return (
      <header id="header">
        <div className="wrap">
          <div className="head-inner">
            <div className="head-title">
              <h1>Dashboard</h1>
            </div>
            <div className="user-dropdown">
              <a href="#" className="link-user">
                <span className="avatar"><img src="/images/iconfinder_bear_russian_animal.svg" width="50" height="50" alt="image"/></span>
                Admin
                <strong className="title-post">Administrator</strong>
                <span className="icon-arrow"/>
              </a>
              <ul className="dropdown">
                <li><a href="#">My Profile</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Log out</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}