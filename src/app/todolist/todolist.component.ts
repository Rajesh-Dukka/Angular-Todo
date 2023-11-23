import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  constructor(private Tservice: TodoserviceService) {}

  todos: any;
  ngOnInit(): void {
    this.todos = this.Tservice.todoList;
  }
  removeTodo(i: any) {
    this.Tservice.deleteTodo(i);
  }
}
