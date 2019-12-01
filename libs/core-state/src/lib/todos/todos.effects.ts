import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { DataPersistence } from '@nrwl/angular';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as TodosActions from './todos.actions';
import { TodosPartialState } from './todos.reducer';
import { TodosService, Todo, NotifyService } from '@workspace/core-data';

@Injectable()
export class TodosEffects {
  loadTodos$ = createEffect(() =>
    this.dataPersistence.fetch(TodosActions.loadTodos, {
      run: (
        action: ReturnType<typeof TodosActions.loadTodos>,
        state: TodosPartialState
      ) => {
        return this.todosService.all().pipe(map((res: Todo[]) => TodosActions.todosLoaded({ todos: res })));
      },

      onError: (action: ReturnType<typeof TodosActions.loadTodos>, error) => {
        return this.notificationService.notify(error, 'Error');
      }
    })
  );

  addTodo$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(TodosActions.createTodo, {
      run: (
        action: ReturnType<typeof TodosActions.createTodo>,
        state: TodosPartialState
      ) => {
        return this.todosService.create(action.todo).pipe(
          map((res: Todo) => TodosActions.todoCreated({ todo: res }))
        );
      },

      onError: (action: ReturnType<typeof TodosActions.createTodo>, error) => {
        this.notificationService.notify(error, 'Error');
      }
    })
  );

  updateTodo$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(TodosActions.updateTodo, {
      run: (
        action: ReturnType<typeof TodosActions.updateTodo>,
        state: TodosPartialState
      ) => {
        return this.todosService.update(action.todo).pipe(
          map((res: Todo) => TodosActions.todoUpdated({ todo: res }))
        );
      },

      onError: (action: ReturnType<typeof TodosActions.updateTodo>, error) => {
        this.notificationService.notify(error, 'Error');
      }
    })
  );

  deleteTodo$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(TodosActions.deleteTodo, {
      run: (
        action: ReturnType<typeof TodosActions.deleteTodo>,
        state: TodosPartialState
      ) => {
        return this.todosService.delete(action.todo.id).pipe(
          map(_ => TodosActions.todoDeleted({todo: action.todo}))
        );
      },

      onError: (action: ReturnType<typeof TodosActions.deleteTodo>, error) => {
        this.notificationService.notify(error, 'Error');
      }
    })
  );

  constructor (
    private actions$: Actions,
    private dataPersistence: DataPersistence<TodosPartialState>,
    private todosService: TodosService,
    private notificationService: NotifyService
  ) { }
}
