import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {path: '', redirectTo: '/todos', pathMatch: 'full'},
  {path: 'todos', component: TodosComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
