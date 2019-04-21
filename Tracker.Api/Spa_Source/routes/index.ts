import { globalStore } from '../store/store';
import { push } from 'connected-react-router';

export function routerRedirect(path: string): void
{
  globalStore.dispatch(push(path));
}