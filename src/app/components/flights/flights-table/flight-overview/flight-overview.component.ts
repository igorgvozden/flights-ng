import { Component, Input } from '@angular/core';
import { Flight } from 'src/app/shared/model/flight.model';

@Component({
  selector: 'app-flight-overview',
  templateUrl: './flight-overview.component.html',
  styleUrls: ['./flight-overview.component.scss'],
})
export class FlightOverviewComponent {
  @Input() flight: Flight;

  showDetails: boolean = false;

  btnClick(flight) {
    console.log(flight);
  }
}
