import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserData } from 'src/app/shared/model/user-data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showProgressBar: boolean = true;

  users: UserData[] = [];

  sideNavTabs = ['flights', 'airports', 'bookings', 'tickets', 'find-hotel'];
  navTabs = ['user'];

  currency: string = 'USD';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // remove once data loading is implemented
    setTimeout(() => {
      this.showProgressBar = false;
    }, 4000);

    this.activatedRoute.data.subscribe((data) => {
      // do something with your resolved data ...
      console.log(data['users']);
      this.users = data['users'];
    });
  }

  navBtnClick(e: any) {
    console.log(e);
  }
}
