import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '@workspace/core-data';
import { Router } from '@angular/router';

@Component({
  selector: 'workspace-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent {
  @Input() todos: Todo[];
  @Output() deleted = new EventEmitter();
  @Output() selected = new EventEmitter();

  constructor(private router: Router) { }

  select(todo: Todo) {
    this.selected.emit(todo);
  }

  viewItem(todo: Todo, event: any) {
    event.stopImmediatePropagation();
    this.router.navigate(['/todos', todo.id]);
  }

  delete(todo: Todo, event: any) {
    event.stopImmediatePropagation();
    this.deleted.emit(todo);
  }
}
