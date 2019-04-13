import createBrowserHistory from 'history/createBrowserHistory';

export const browserHistory = createBrowserHistory();

export function routerRedirect(path: string): void
{
  browserHistory.push(path);
}