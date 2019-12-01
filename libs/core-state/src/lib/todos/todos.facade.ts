import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import { Todo } from '@workspace/core-data';
import * as fromTodos from './todos.reducer';
import * as todoActions from './todos.actions';
import * as TodosSelectors from './todos.selectors';

@Injectable()
export class TodosFacade {
  loaded$ = this.store.pipe(select(TodosSelectors.todosLoading));
  allTodos$ = this.store.pipe(select(TodosSelectors.getAllTodos));
  selectedTodo$ = this.store.pipe(select(TodosSelectors.getSelected));

  constructor (private store: Store<fromTodos.TodosPartialState>) { }

  selectTodo(todoId: string) {
    this.dispatch(todoActions.todoSelected({ selectedId: todoId }));
  }

  loadTodos() {
    this.dispatch(todoActions.loadTodos());
  }

  createTodo(todo: Todo) {
    this.dispatch(todoActions.createTodo({ todo }));
  }

  updateTodo(todo: Todo) {
    this.dispatch(todoActions.updateTodo({ todo }));
  }

  deleteTodo(todo: Todo) {
    this.dispatch(todoActions.deleteTodo({ todo }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
