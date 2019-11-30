import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import * as TodosActions from './todos.actions';
import { TodosPartialState } from './todos.reducer';

@Injectable()
export class TodosEffects {
  loadTodos$ = createEffect(() =>
    this.dataPersistence.fetch(TodosActions.loadTodos, {
      run: (
        action: ReturnType<typeof TodosActions.loadTodos>,
        state: TodosPartialState
      ) => {
        // Your custom service 'load' logic goes here. For now just return a success action...
        return TodosActions.loadTodosSuccess({ todos: [] });
      },

      onError: (action: ReturnType<typeof TodosActions.loadTodos>, error) => {
        return TodosActions.loadTodosFailure({ error });
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<TodosPartialState>
  ) {}
}
