import { ActionReducerMap } from '@ngrx/store';

import * as fromTodos from './todos/todos.reducer';

export interface AppState {
  todos: fromTodos.State
}

export const reducers: ActionReducerMap<AppState> = {
  todos: fromTodos.reducer
}
