import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Todo } from '@workspace/core-data';
import { TodosFacade } from '@workspace/core-state';

@Component({
  selector: 'workspace-todos-view',
  templateUrl: './todos-view.component.html',
  styleUrls: ['./todos-view.component.scss']
})
export class TodosViewComponent {
  currentTodo$: Observable<Todo>;
  constructor(private todosFacade: TodosFacade) {
    todosFacade.loadTodos();
    this.currentTodo$ = todosFacade.selectedTodo$;
  }
}
