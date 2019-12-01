import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  TODOS_FEATURE_KEY,
  State,
  TodosPartialState,
  todosAdapter
} from './todos.reducer';

// Lookup the 'Todos' feature state managed by NgRx
export const getTodosState = createFeatureSelector<TodosPartialState, State>(TODOS_FEATURE_KEY);

// Adapter Selectors
const { selectAll, selectEntities } = todosAdapter.getSelectors();

export const todosLoading = createSelector(
  getTodosState,
  (state: State) => state.isLoading
);

export const getAllTodos = createSelector(
  getTodosState,
  (state: State) => selectAll(state)
);

export const getTodosEntities = createSelector(
  getTodosState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getTodosState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getTodosEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
