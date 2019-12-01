import { Component, OnInit } from '@angular/core';

import { TodosFacade } from '@workspace/core-state';

@Component({
  selector: 'workspace-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(private todosFacade: TodosFacade) { }

  ngOnInit() {
    this.todosFacade.loadTodos();
  }

}
