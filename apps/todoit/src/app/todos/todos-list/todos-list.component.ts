import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '@workspace/core-data';

@Component({
  selector: 'workspace-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent {
  @Input() todos: Todo[];
  @Output() deleted = new EventEmitter();
  @Output() selected = new EventEmitter();

  constructor() { }

  select(todo: Todo) {
    this.selected.emit(todo);
  }

  delete(todo: Todo, event: any) {
    event.stopImmediatePropagation();
    this.deleted.emit(todo);
  }
}
