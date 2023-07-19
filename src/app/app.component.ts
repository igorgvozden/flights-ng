import { Component, OnInit } from '@angular/core';
import { AppService } from './api/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'console';
  showLoading: boolean = true;
  showProgressBar: boolean = true;

  constructor(private appService: AppService) {}
}
