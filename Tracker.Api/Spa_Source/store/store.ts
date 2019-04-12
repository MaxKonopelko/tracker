import { createBrowserHistory } from 'history';
import { IAppState, reducers } from './state';
import { applyMiddleware, createStore, Middleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';

export const browserHistory: History = createBrowserHistory();

const configureStore = (): Store<IAppState> =>
{
  const middlewares: Middleware[] = [
    routerMiddleware(browserHistory),
    thunk
  ];

  return createStore(
    reducers(browserHistory),
    composeWithDevTools(applyMiddleware(...middlewares))
  );
};

export const store = configureStore();
