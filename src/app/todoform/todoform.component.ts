import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css'],
})
export class TodoformComponent implements OnInit {
  taskInput: any = '';
  constructor(
    private tservice: TodoserviceService,
    private Translateserv: TranslateService
  ) {}
  addItem() {
    this.tservice.addTodo(this.taskInput);
    // console.log(this.taskInput);
    this.taskInput = '';
  }

  // Localization
  lang = '';

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
  }

  ChangeLang(lang: any) {
    const selectedLang = lang.target.value;
    localStorage.setItem('lang', selectedLang);
    this.Translateserv.use(selectedLang);
  }
}
