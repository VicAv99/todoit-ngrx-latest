import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Todo } from './todo.model';

const BASEURL = 'http://localhost:3000';
const model   = 'todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private httpClient: HttpClient) { }

  all(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.getUrl());
  }

  create(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(this.getUrl(), todo);
  }

  update(todo: Todo): Observable<Todo> {
    return this.httpClient.patch<Todo>(this.getUrlWithId(todo.id), todo);
  }

  delete(todoId: string | number): Observable<unknown> {
    return this.httpClient.delete<any>(this.getUrlWithId(todoId));
  }

  private getUrl(): string {
    return `${BASEURL}/${model}`;
  }

  private getUrlWithId(id: string | number): string {
    return `${this.getUrl()}/${id}`;
  }
}
