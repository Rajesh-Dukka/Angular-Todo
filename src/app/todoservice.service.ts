import { Injectable } from '@angular/core';
import { TodolistComponent } from './todolist/todolist.component';

@Injectable({
  providedIn: 'root',
})
export class TodoserviceService {
  todoId: any = 0;
  todoList: any = [];

  constructor() {}

  addTodo(taskname: any) {
    this.todoList.push({ id: this.todoId++, task: taskname });
  }
  deleteTodo(index: any) {
    this.todoList.splice(index, 1);
  }
}
