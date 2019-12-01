import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { Todo } from '@workspace/core-data';
import { TodosFacade } from '@workspace/core-state';

@Component({
  selector: 'workspace-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  form: FormGroup;
  todo$: Observable<Todo>;
  todos$: Observable<Todo[]>;

  constructor(
    private todosFacade: TodosFacade,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.todosFacade.loadTodos();
    this.todo$ = this.todosFacade.selectedTodo$;
    this.todos$ = this.todosFacade.allTodos$;
    this.todosFacade.mutations$.subscribe(() => this.reset());
    this.initForm();
  }

  select(todo: Todo) {
    this.form.patchValue(todo);
    this.todosFacade.selectTodo(todo.id);
  }

  save(todo: Todo) {
    if (todo.id) {
      this.todosFacade.updateTodo(todo);
      return;
    }
    this.todosFacade.createTodo(todo);
  }

  delete(todo: Todo) {
    this.todosFacade.deleteTodo(todo);
  }

  reset() {
    this.form.reset();
    this.select({id: null} as Todo);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      description: ['', Validators.compose([Validators.required])],
      finished: ['', Validators.compose([Validators.required])],
      deleted: ['', Validators.compose([Validators.required])]
    });
  }

}
