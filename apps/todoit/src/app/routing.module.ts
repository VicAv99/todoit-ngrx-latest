import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosComponent } from './todos/todos.component';
import { TodosViewComponent } from './todos/todos-view/todos-view.component';

const routes: Routes = [
  {path: '', redirectTo: 'todos', pathMatch: 'full'},
  {path: 'todos', children: [
    {path: '', component: TodosComponent, data: {title: 'ALL\'s of \'em'}},
    {path: ':id', component: TodosViewComponent, data: {title: 'Just One!'}}
  ]},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
