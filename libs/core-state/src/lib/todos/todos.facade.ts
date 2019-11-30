import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromTodos from './todos.reducer';
import * as TodosSelectors from './todos.selectors';

@Injectable()
export class TodosFacade {
  loaded$ = this.store.pipe(select(TodosSelectors.getTodosLoaded));
  allTodos$ = this.store.pipe(select(TodosSelectors.getAllTodos));
  selectedTodos$ = this.store.pipe(select(TodosSelectors.getSelected));

  constructor(private store: Store<fromTodos.TodosPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
