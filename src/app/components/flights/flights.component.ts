import { Component } from '@angular/core';
import { Flight } from 'src/app/shared/model/flight.model';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss'],
})
export class FlightsComponent {
  flights;

  title: string = 'flights';
  heroSrc: string = '../../../../assets/images/hero-flight.png';

  captureFlights(event) {
    console.log(event);
    this.flights = event;
  }
}
