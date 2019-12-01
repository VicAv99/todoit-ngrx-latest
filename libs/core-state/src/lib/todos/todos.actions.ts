import { createAction, props } from '@ngrx/store';

import { Todo } from '@workspace/core-data';

enum TodosActions {
  TODO_SELECTED = '[TODO] Todo Selected',
  LOAD_TODOS    = '[TODO] Load Todos',
  TODOS_LOADED  = '[TODO] Todos Loaded',
  CREATE_TODO   = '[TODO] Create Todo',
  TODO_CREATED  = '[TODO] Todo Created',
  UPDATE_TODO   = '[TODO] Update Todo',
  TODO_UPDATED  = '[TODO] Todo Updated',
  DELETE_TODO   = '[TODO] Delete Todo',
  TODO_DELETED  = '[TODO] Todo Deleted'
}

export const todoSelected = createAction(
  TodosActions.TODO_SELECTED,
  props<{ selectedId: string }>()
)

export const loadTodos = createAction(TodosActions.LOAD_TODOS);

export const todosLoaded = createAction(
  TodosActions.TODOS_LOADED,
  props<{ todos: Todo[] }>()
);

export const createTodo = createAction(
  TodosActions.CREATE_TODO,
  props<{ todo: Todo }>()
);

export const todoCreated = createAction(
  TodosActions.TODO_CREATED,
  props<{ todo: Todo }>()
);

export const updateTodo = createAction(
  TodosActions.UPDATE_TODO,
  props<{ todo: Todo }>()
);

export const todoUpdated = createAction(
  TodosActions.TODO_UPDATED,
  props<{ todo: Todo }>()
);

export const deleteTodo = createAction(
  TodosActions.DELETE_TODO,
  props<{ todo: Todo }>()
);
export const todoDeleted = createAction(
  TodosActions.TODO_DELETED,
  props<{ todo: Todo }>()
);
