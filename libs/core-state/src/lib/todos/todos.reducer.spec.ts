import { Todo } from './todo.model';
import * as TodosActions from './todos.actions';
import { State, initialState, reducer } from './todos.reducer';

describe('Todos Reducer', () => {
  const createTodosEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    });

  beforeEach(() => {});

  describe('valid Todos actions', () => {
    it('loadTodosSuccess should return set the list of known Todos', () => {
      const todos = [
        createTodosEntity('PRODUCT-AAA'),
        createTodosEntity('PRODUCT-zzz')
      ];
      // const action = TodosActions.loadTodosSuccess({ todos });

      const result: State = reducer(initialState, {} as any);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
