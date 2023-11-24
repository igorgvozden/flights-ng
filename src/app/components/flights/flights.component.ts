import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/api/services/users.service';
import { Flight } from 'src/app/shared/model/flight.model';
import { UserData } from 'src/app/shared/model/user-data.model';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss'],
})
export class FlightsComponent implements OnInit {
  flights;
  activeUser: UserData;

  title: string = 'flights';
  heroSrc: string = '../../../../assets/images/hero-flight.png';

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getActiveUser().subscribe((activeUser) => {
      if(activeUser) {
        this.activeUser = activeUser;
      }
      // console.log('wooohooooooooo, we have active user', this.activeUser);
    });
  }

  captureFlights(event) {
    // console.log(event);
    this.flights = event;
  }
}
