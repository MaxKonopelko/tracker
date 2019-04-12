import createBrowserHistory from 'history/createBrowserHistory';

export const browserHistory = createBrowserHistory();

browserHistory.listen(location => {
  console.warn('location', location);
})

export function routerRedirect(path: string): void
{
  browserHistory.push(path);
}