import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  FlightsService,
  RoundFlights,
} from 'src/app/api/services/flights.service';
import { Flight } from 'src/app/shared/model/flight.model';
import { UserData } from 'src/app/shared/model/user-data.model';

@UntilDestroy()
@Component({
  selector: 'app-flights-table',
  templateUrl: './flights-table.component.html',
  styleUrls: ['./flights-table.component.scss'],
})
export class FlightsTableComponent implements OnInit {
  @Input() activeUser: UserData;

  constructor(private flightsService: FlightsService) {}

  flights: RoundFlights;

  ngOnInit(): void {
    this.flightsService
      .getActiveFlightSearch()
      .pipe(untilDestroyed(this))
      .subscribe((flights) => {
        if (
          (flights && flights.departureFlights.length > 50) ||
          flights.returnFlights.length > 50
        ) {
          flights.departureFlights = flights.departureFlights.slice(0, 50);
          flights.returnFlights = flights.returnFlights.slice(0, 50);
        }
        this.flights = flights;
      });
  }
}
