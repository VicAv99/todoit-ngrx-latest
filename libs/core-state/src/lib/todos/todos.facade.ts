import { Injectable } from '@angular/core';

import { filter } from 'rxjs/operators';
import { select, Store, Action, ActionsSubject } from '@ngrx/store';

import { Todo } from '@workspace/core-data';
import * as fromTodos from './todos.reducer';
import * as todoActions from './todos.actions';
import * as TodosSelectors from './todos.selectors';

@Injectable({providedIn: 'root'})
export class TodosFacade {
  loading$ = this.store.pipe(select(TodosSelectors.todosLoading));
  allTodos$ = this.store.pipe(select(TodosSelectors.getAllTodos));
  selectedTodo$ = this.store.pipe(select(TodosSelectors.getSelected));
  mutations$ = this.actions$
    .pipe(
      filter(action =>
        action.type === todoActions.createTodo({todo: null}).type
        || action.type === todoActions.updateTodo({todo: null}).type
        || action.type === todoActions.deleteTodo({todo: null}).type
      )
    );

  constructor (private store: Store<fromTodos.TodosPartialState>, private actions$: ActionsSubject) { }

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
