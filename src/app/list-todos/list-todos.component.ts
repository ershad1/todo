import {Component, OnInit} from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Router} from '@angular/router';

export class Todo {
  constructor() {
  }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  message: string;
  todos: Todo[];
  // [
  // new Todo(1, 'Learn to dance', false, new Date()),
  // new Todo(1, 'Become an Expert at Angular', false, new Date()),
  // new Todo(1, 'Visit India', false, new Date())

  // {id: 1, description: 'Learn to dance'},
  // {id: 2, description: 'Become an Expert at Angular'},
  // {id: 3, description: 'Visit India'}
  // ];

  constructor(
    private todoDataService: TodoDataService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.refreshTodos();

  }

  refreshTodos() {
    this.todoDataService.retrieveAllTodos('asdfsaf').subscribe(
      response => this.todos = response
    );
  }

  deleteTodo(id) {
    this.todoDataService.deleteTodo('u', id).subscribe(
      response => {
        this.message = `Delete of Todo ${id} Successful`
        this.refreshTodos();
      }
    )
  }

  updateTodo(id: number) {
    this.router.navigate(['todos', id])
  }
}
