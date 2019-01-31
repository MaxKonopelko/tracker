import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import { App } from './app/app';
import { browserHistory } from './routes';
import { Growl } from './libreris/growl';

Growl.init();

ReactDOM.render((
    <BrowserRouter>
      <Router history={browserHistory}>
        <App/>
      </Router>
    </BrowserRouter>
  ),
  document.getElementById('wrapper')
);
