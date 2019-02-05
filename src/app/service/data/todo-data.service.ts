import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  retrieveAllTodos(username) {
    return this.httpClient.get<Todo[]>(`http://localhost:8090/users/${username}/todos`)
  }

  deleteTodo(username, id) {
    return this.httpClient.delete(`http://localhost:8090/users/${username}/todos/${id}`);
  }
}