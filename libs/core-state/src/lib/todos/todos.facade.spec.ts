import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { Todo } from '@workspace/core-data';
import { TodosEffects } from './todos.effects';
import { TodosFacade } from './todos.facade';

import * as TodosSelectors from './todos.selectors';
import * as TodosActions from './todos.actions';
import {
  TODOS_FEATURE_KEY,
  State,
  initialState,
  reducer
} from './todos.reducer';

interface TestSchema {
  todos: State;
}

describe('TodosFacade', () => {
  let facade: TodosFacade;
  let store: Store<TestSchema>;
  const createTodosEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    });

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(TODOS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([TodosEffects])
        ],
        providers: [TodosFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(TodosFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allTodos$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(TodosActions.loadTodos());

        list = await readFirst(facade.allTodos$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadTodosSuccess` to manually update list
     */
    it('allTodos$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allTodos$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        // facade.dispatch(
          // TodosActions.loadTodosSuccess({
            // todos: [createTodosEntity('AAA'), createTodosEntity('BBB')]
          // })
        // );

        list = await readFirst(facade.allTodos$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
