import { ActionReducerMap } from '@ngrx/store';

import * as fromTodos from './todos/todos.reducer';
import * as fromRouter from '@ngrx/router-store';

export interface AppState {
  todos: fromTodos.State;
  router: fromRouter.RouterReducerState<any>;
}

export const reducers: ActionReducerMap<AppState> = {
  todos: fromTodos.reducer,
  router: fromRouter.routerReducer
}
