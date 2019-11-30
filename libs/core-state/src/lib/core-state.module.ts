import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NxModule } from '@nrwl/nx';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule, RootStoreConfig } from '@ngrx/store';

const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true
  }
}

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot({}, storeConfig),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    EffectsModule.forRoot([])
  ]
})
export class CoreStateModule {}
