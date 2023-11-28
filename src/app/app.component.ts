import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Todo';
  constructor(private TransService: TranslateService) {
    this.TransService.setDefaultLang('en');
    this.TransService.use(localStorage.getItem('lang') || 'en');
  }
}
