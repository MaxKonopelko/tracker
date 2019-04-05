import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { browserHistory } from './routes';
import { Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/app';

ReactDOM.render((
    <BrowserRouter>
      <Router history={browserHistory}>
        <App/>
      </Router>
    </BrowserRouter>
  ),
  document.getElementById('wrapper')
);
