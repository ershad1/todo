import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../../list-todos/list-todos.component';
import {TODO_JPA_API_URL} from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  retrieveAllTodos(username) {
    return this.httpClient.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`)
  }

  deleteTodo(username, id) {
    return this.httpClient.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username, id) {
    return this.httpClient.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo) {
    return this.httpClient.put(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`, todo);
  }

  createTodo(username, todo) {
    return this.httpClient.post(`${TODO_JPA_API_URL}/users/${username}/todos`, todo);
  }
}
