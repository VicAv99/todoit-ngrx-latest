import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Todo } from '@workspace/core-data';

@Component({
  selector: 'workspace-todos-details',
  templateUrl: './todos-details.component.html',
  styleUrls: ['./todos-details.component.scss']
})
export class TodosDetailsComponent {
  selectedTodo: Todo;
  @Input() group: FormGroup;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set todo(value: Todo) {
    this.selectedTodo = {...value};
  }

  constructor() {}

  save() {
    this.saved.emit(this.group.value);
  }

  cancel() {
    this.cancelled.emit();
  }
}
