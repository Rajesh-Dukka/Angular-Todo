import { Component } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css'],
})
export class TodoformComponent {
  taskInput: any = '';
  constructor(private tservice: TodoserviceService) {}
  addItem() {
    this.tservice.addTodo(this.taskInput);
    this.taskInput = '';
  }
}
