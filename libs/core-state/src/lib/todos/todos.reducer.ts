import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as TodosActions from './todos.actions';
import { Todo } from '@workspace/core-data';

export const TODOS_FEATURE_KEY = 'todos';

export interface State extends EntityState<Todo> {
  selectedId?: string | number; // which Todos record has been selected
  isLoading: boolean; // has the Todos list been loaded
}

export interface TodosPartialState {
  readonly [TODOS_FEATURE_KEY]: State;
}

export const todosAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: State = todosAdapter.getInitialState({
  // set initial required properties
  isLoading: false
});

const todosReducer = createReducer(
  initialState,
  on(TodosActions.todoSelected, (state, {selectedId}) =>
    Object.assign({}, state, {selectedId})),
  on(
    TodosActions.loadTodos,
    TodosActions.createTodo,
    TodosActions.updateTodo,
    TodosActions.deleteTodo,
    state => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(TodosActions.todosLoaded, (state, { todos }) =>
    todosAdapter.addAll(todos, state)
  ),
  on(TodosActions.todoCreated, (state, { todo }) =>
    todosAdapter.addOne(todo, state)
  ),
  on(TodosActions.todoUpdated, (state, { todo }) =>
    todosAdapter.upsertOne(todo, state)
  ),
  on(TodosActions.todoDeleted, (state, { todo }) =>
    todosAdapter.removeOne(todo.id, state)
  )
);

export function reducer(state: State | undefined, action: Action) {
  return todosReducer(state, action);
}
