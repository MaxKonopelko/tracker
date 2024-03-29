import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import { browserHistory, globalStore } from './store/store';
import { ConnectedRouter } from 'connected-react-router';
import { AppComponent } from './app/appComponent';

ReactDOM.render(
  (
    <Provider store={globalStore}>
      <ConnectedRouter history={browserHistory}>
        <Route component={AppComponent}/>
      </ConnectedRouter>
    </Provider>
  ),
  document.getElementById('wrapper')
);
