import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreDataModule } from '@workspace/core-data';
import { CoreStateModule } from '@workspace/core-state';
import { MaterialModule } from '@workspace/material';
import { UiToolbarModule } from '@workspace/ui-toolbar';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodosListComponent } from './todos/todos-list/todos-list.component';
import { TodosDetailsComponent } from './todos/todos-details/todos-details.component';
import { TodosViewComponent } from './todos/todos-view/todos-view.component';

@NgModule({
  declarations: [AppComponent, TodosComponent, TodosListComponent, TodosDetailsComponent, TodosViewComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiToolbarModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
