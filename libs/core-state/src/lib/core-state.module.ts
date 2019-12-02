import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { NxModule, DataPersistence } from '@nrwl/angular';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule, RootStoreConfig } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';

import { reducers } from '.';
import { TodosEffects } from './todos/todos.effects';
import { RouterEffects } from './router/router.effects';

const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true
  }
};

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot(reducers, storeConfig),
    StoreDevtoolsModule.instrument({ name: 'NgRx TODO App', maxAge: 25 }),
    StoreRouterConnectingModule.forRoot({routerState: RouterState.Minimal}),
    EffectsModule.forRoot([
      RouterEffects,
      TodosEffects
    ]),
  ],
  providers: [DataPersistence]
})
export class CoreStateModule {}
